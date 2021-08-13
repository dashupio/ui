
import React from 'react';

// circular
import Body from './Body';
import Bulk from './Bulk';
import Header from './Header';
import Footer from './Footer';
import Gallery from './Gallery';

// let context
let DashupUIContext = null;
let DashupUIGridBody = null;
let DashupUIGridBulk = null;
let DashupUIGridHeader = null;
let DashupUIGridFooter = null;
let DashupUIGridGallery = null;

// create dashup grid body
const DashupUIGridGroup = (props = {}) => {

  // return JSX
  return (
    <DashupUIContext.Consumer>
      { ({ dashup, bulkItem, display, loading, renderField, setSkip, setColumns, selected, saving, onSelect, isSelected, fullHeight }) => {
        return (
          <div className={ `dashup-grid-group${fullHeight ? ' d-flex flex-1 flex-column' : '' }`}>
            { props.label && (
              <div className="group-title">
                { props.label }
              </div>
            ) }

            <div className={ `grid-main${fullHeight ? ' d-flex flex-1 flex-column' : ''}` }>
              { typeof props.display !== 'undefined' ? (
                <DashupUIGridGallery
                  display={ display || props.display }

                  { ...props }
                />
              ) : (
                <>
                  <DashupUIGridHeader
                    dashup={ dashup || props.dashup }
                    loading={ loading || props.loading }
                    selected={ selected || props.selected }
                    onSelect={ onSelect || props.onSelect }
                    isSelected={ isSelected || props.isSelected }
                    setColumns={ setColumns || props.setColumns }
                    />
                  <DashupUIGridBody
                    dashup={ dashup || props.dashup }
                    loading={ loading || props.loading }
                    selected={ selected || props.selected }
                    onSelect={ onSelect || props.onSelect }
                    isSelected={ isSelected || props.isSelected }
                    renderField={ renderField || props.renderField }
                    />
                  <DashupUIGridBulk
                    item={ bulkItem || props.bulkItem }
                    dashup={ dashup || props.dashup }
                    loading={ saving || props.saving }
                    loading={ loading || props.loading }
                    selected={ selected || props.selected }
                    onSelect={ onSelect || props.onSelect }
                    isSelected={ isSelected || props.isSelected }
                    renderField={ renderField || props.renderField }
                    />
                </>
              ) }
              
              <DashupUIGridFooter setSkip={ setSkip || props.setSkip } />

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
  DashupUIGridBody = Body(ctx);
  DashupUIGridBulk = Bulk(ctx);
  DashupUIGridHeader = Header(ctx);
  DashupUIGridFooter = Footer(ctx);
  DashupUIGridGallery = Gallery(ctx);

  // return actual component
  return DashupUIGridGroup;
};