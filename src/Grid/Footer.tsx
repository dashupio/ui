
import React from 'react';
import { pagix } from 'pagix';
import { Pagination } from '../';

// let context
let DashupUIContext = null;

// create dashup grid body
const DashupUIGridFooter = (props = {}) => {

  // return JSX
  return (
    <DashupUIContext.Consumer>
      { ({ skip, total : records, limit, setSkip }) => {
        // set current
        const current = Math.floor((skip || 0) / (limit || 25)) + 1;

        // paginate
        const { total, start, middle, end, prev, next, from, to } = pagix({
          limit   : limit   || 25,
          records : records || 0,
          current,
        });

        // on page
        const onPage = (page) => {
          // new skip
          const newSkip = (page - 1) * (limit || 25);

          // skip
          (setSkip || props.setSkip)(newSkip);
        };
        
        // return jsx
        return (
          <div className="px-2 pt-3">
            <div className="row">
              <div className="col-6 d-flex align-items-center">
                <div className="pagination-stats w-100">
                  Showing { (from || 0).toLocaleString() } - { (to || 0).toLocaleString() } of { (records || 0).toLocaleString() }
                </div>
              </div>
              <div className="col-6 d-flex align-items-center">
                <div className="w-100">
                  <Pagination className="float-end m-0">
                    <Pagination.First disabled={ current === 1 } onClick={ () => onPage(1) } />
                    { prev && (
                      <>
                        <Pagination.Prev onClick={ () => onPage(current - 1) } />
                      </>
                    ) }
                    { [...start, ...middle, ...end].map((page) => {
                      // return jsx
                      return (
                        <Pagination.Item
                          key={ `page-${page}` }
                          active={ page === current }
                          onClick={ () => onPage(page) }
                        >
                          {page}
                        </Pagination.Item>
                      );
                    }) }
                    { next && (
                      <>
                        <Pagination.Next onClick={ () => onPage(current + 1) } />
                      </>
                    ) }
                    <Pagination.Last disabled={ current === total } onClick={ () => onPage(total) } />
                  </Pagination>
                </div>
              </div>
            </div>
          </div>
        );
      } }
    </DashupUIContext.Consumer>
  );
};

// export default page menu
export default (ctx) => {
  // use context
  DashupUIContext = ctx;

  // return actual component
  return DashupUIGridFooter;
};