
// import dependencies
import copy from 'copy-to-clipboard';
import View from '@dashup/view';
import Select from '../Select';
import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';

// let context
let loading = false;
let DashupContext = null;

// create menu component
const DashupUIPageShare = (props = {}) => {
  // use state
  const [share, setSharing] = useState(null);
  const [shares, setShares] = useState(null);
  const [saving, setSaving] = useState(false);
  const [prevent, setPrevent] = useState(false);
  const [copying, setCopying] = useState(null);
  const [removing, setRemoving] = useState(null);

  // get type
  const getType = (struct, page) => {
    // map
    return ['Link', 'Marketplace'].filter((item) => {
      // check item
      if (item === 'Marketplace' && (!struct?.data?.share || page.get('link'))) return false;

      // return true
      return true;
    }).map((label) => {
      // set value
      const value = label.toLowerCase();

      // return value
      return {
        label,
        value,

        selected : (share?.type || 'link') === value,
      };
    });
  };

  // on copy
  const onCopy = (share) => {
    // set copying
    setCopying(share.id);

    // timeout
    setTimeout(() => setCopying(null), 2000);

    // copy
    copy(`https://${eden.get('config.domain')}/share/${share.slug}`);
  };

  // on share
  const onSubmit = async (page, dashup) => {
    // loading
    setSaving(true);

    // get result
    const result = await eden.router.post(`/app/${dashup.get('_id')}/share/${page.get('_id')}/${share.id ? `${share.id}/update` : 'create'}`, share);

    // push result
    if (result.success) {
      // find
      const found = shares.find((s) => s.id === result.data.id);

      // check found
      if (found) {
        // set to found
        Object.keys(result.data).forEach((key) => {
          // update values
          found[key] = result.data[key];
        });
      } else {
        // push
        shares.push(result.data);
      }
    }

    // loading
    setShares([...shares]);
    setSaving(false);
    setSharing(null);
  };
  
  // on remove
  const onRemove = async (page, dashup) => {
    // loading
    setSaving(true);

    // filter
    const newShares = shares.filter((s) => s.id !== removing.id);

    // get result
    await eden.router.post(`/app/${dashup.get('_id')}/share/${page.get('_id')}/${removing.id}/remove`);

    // loading
    setShares([...newShares]);
    setSaving(false);
    setRemoving(null);
  };

  // set share
  const setShare = (key, value) => {
    // set value
    share[key] = value;

    // set share
    setSharing({ ...share });
  };

  // get shares
  const getShares = (dashup, page, share) => {
    // accum
    return Object.keys(share).reduce((accum, item) => {
      // check array
      let ids = page.get(item);
      if (!Array.isArray(ids)) ids = [ids].filter((i) => i);

      // find page
      ids.forEach((id) => {
        // check id
        if (!dashup.page(id)) return;
        if (!accum.find((p) => p.get('_id') === id)) accum.push(dashup.page(id));
      });

      // return accum
      return accum;
    }, []);
  };

  // load shares
  const loadShares = (page, dashup) => {
    // check loading
    if (loading) return;

    // loading true
    loading = true;

    // load shares
    eden.router.get(`/app/${dashup.get('_id')}/share/${page.get('_id')}/list`).then(({
      data,
    }) => {
      // shares
      setShares(data);

      // loading done
      loading = false;
    });
  }

  // return JSX
  return (
    <DashupContext.Consumer>
      { ({ page, guest, dashup, getPageStruct }) => {
        // load shares
        if (!shares && props.show) loadShares(page, dashup);

        // shares page
        const shareP = guest.page('shares');
        const sForm = shareP && Array.from(guest.get('pages').values()).find((p) => p.get('type') === 'form' && p.get('data.model') === shareP.get('_id'));
        const sFields = sForm && sForm.get('data.fields');
        const categories = sFields && (sFields || []).find((f) => f.name === 'categories');

        // get struct
        const struct = page.get('type') && getPageStruct(page.get('type'));
        
        // return jsx
        return (
          <Modal show={ props.show } onHide={ props.onHide }>
            <Modal.Header closeButton>
              <Modal.Title>
                Share { page.get('name') }
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              { share ? (
                <>
                  { !!struct?.data?.share?.pages && (
                    <div className="mb-3">
                      <p>
                        The following pages will also be shared:
                      </p>
                      <div>
                        { getShares(dashup, page, struct.data.share.pages).map((sPage) => {
                          // get color
                          const color = sPage.get('color');

                          // return jsx
                          return (
                            <div key={ `page-${sPage.get('_id')}` } className="card card-permission mb-2">
                              <div className="card-body d-flex align-items-center ">
                                <span className={ `btn p-2 btn-sm me-2` }  style={ {
                                    color      : color?.drk ? '#fff' : (color?.hex ? '#000' : null),
                                    background : color?.hex || color,
                                  } }>
                                  <i className={ `fa fa-fw fa-${sPage.get('icon') || 'pencil'}` } />
                                </span>
                                <span className="flex-1">
                                  { sPage.get('name') }
                                </span>
                              </div>
                            </div>
                          );
                        }) }
                      </div>
                    </div>
                  ) }
                  <div className="mb-3">
                    <label className="form-label">
                      Share Type
                    </label>
                    <Select options={ getType(struct, page) } value={ getType(struct, page).filter((v) => v.selected) } onChange={ (value) => setShare('type', value?.value) } />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Share Name
                    </label>
                    <input className="form-control" type="text" onChange={ (e) => setShare('name', e.target.value) } defaultValue={ share.name } />
                  </div>
                  { share.type === 'marketplace' && (
                    <>
                      <hr />
                      <p>
                        Adding this page to the marketplace will make it available for anyone to see once approved.
                      </p>
                      <View
                        type="field"
                        view="input"
                        struct="image"
                        field={ {
                          uuid  : 'image',
                          input : 'input',
                          label : 'Image',
                        } }
                        item={ new dashup.Model() }
                        value={ share.image }
                        dashup={ dashup }
                        onChange={ (f, val) => setShare('image', val) }
                        setPrevent={ setPrevent }
                        />
                      { !!categories && (
                        <View
                          type="field"
                          view="input"
                          struct="select"
                          field={ categories }
                          item={ new dashup.Model() }
                          value={ share.categories }
                          dashup={ dashup }
                          onChange={ (f, val) => setShare('categories', val) }
                          />
                      ) }
                      <View
                        type="field"
                        view="input"
                        struct="textarea"
                        field={ {
                          uuid  : 'description',
                          label : 'Description',
                        } }
                        item={ new dashup.Model() }
                        value={ share.description }
                        dashup={ dashup }
                        onChange={ (f, val) => setShare('description', val) }
                        />
                      { /*
                      <View
                        type="field"
                        view="input"
                        struct="product"
                        field={ {
                          uuid  : 'price',
                          label : 'Product',
                        } }
                        item={ new dashup.Model() }
                        value={ share.price || { type : 'simple', price : 0 } }
                        dashup={ dashup }
                        onChange={ (f, val) => setShare('price', val) }
                        />
                      */ }
                    </>
                  ) }
                </>
              ) : (
                removing ? (
                  <div className="py-5 text-center">
                    Are you sure you want to remove this share?
                  </div>
                ) : (
                  (shares || []).length ? (shares || []).map((share, i) => {
                    // return jsx
                    return (
                      <div key={ `share-${i}` } className="card card-permission mb-2">
                        <div className="card-body d-flex align-items-center">
                          <span className="btn btn-primary me-2">
                            <i className={ `fa fa-fw fa-${share.type === 'link' ? 'link' : 'tags'}` } />
                          </span>
                          <div className="flex-1">
                            { share.type === 'link' ? (
                              <div className="input-group">
                                <input className="form-control" readOnly value={ `/share/${share.slug}` } />
                                <button className={ `btn btn-${copying === share.id ? 'success' : 'secondary'} input-group-append` } onClick={ (e) => onCopy(share) }>
                                  { copying === share.id ? (
                                    <i className="fa fa-check" />
                                  ) : (
                                    <i className="fa fa-clipboard-check" />
                                  ) }
                                </button>
                              </div>
                            ) : (
                              <div className="share-name">
                                { share.name }
                              </div>
                            ) }
                          </div>
                          <Button variant="primary" className="ms-2" onClick={ () => setSharing(share) }>
                            <i className="fa fa-fw fa-ellipsis-h" />
                          </Button>
                          <Button variant="danger" className="ms-2" onClick={ () => setRemoving(share) }>
                            <i className="fa fa-fw fa-trash" />
                          </Button>
                        </div>
                      </div>
                    );
                  }) : (
                    <div className="py-5 text-center">
                      This page has no shares, click below to create one.
                    </div>
                  )
                )
              ) }
            </Modal.Body>
            { share ? (
              <Modal.Footer>
                <Button variant="info" className="me-auto" onClick={ () => setSharing(null) }>
                  Back
                </Button>
                <Button variant="success" disabled={ prevent || saving } onClick={ () => onSubmit(page, dashup) }>
                  { prevent ? 'Uploading...' : (saving ? 'Submitting...' : 'Submit') }
                </Button>
              </Modal.Footer>
            ) : (
              removing ? (
                <Modal.Footer>
                  <Button variant="info" className="me-auto" onClick={ () => setRemoving(null) }>
                    Back
                  </Button>
                  <Button variant="danger" disabled={ saving } onClick={ () => onRemove(page, dashup) }>
                    { saving ? 'Removing...' : 'Remove' }
                  </Button>
                </Modal.Footer>
              ) : (
                <Modal.Footer>
                  <Button variant="success" onClick={ () => setSharing({ type : 'link' }) }>
                    Create Share
                  </Button>
                </Modal.Footer>
              )
            ) }
          </Modal>
        );
      } }
    </DashupContext.Consumer>
  );
};

// export default page menu
export default (ctx) => {
  // use context
  DashupContext = ctx;

  // return actual component
  return DashupUIPageShare;
};