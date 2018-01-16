import React from 'react';
import { computed, extendObservable, observable, reaction, runInAction } from 'mobx';
import { observer } from 'mobx-react';
import { Element, scroller } from 'react-scroll';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.dispose = reaction(
      () => {
        return this.props.store.itemSelected;
      },
      (itemSelected) => {
        scroller.scrollTo(itemSelected, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
      }
    )
  }

  componentWillUnmount() {
    this.dispose();
  }

  render() {
    const { lista: items, itemSelected: selected } = this.props.store;
    return (
      <ul className="lista">
        <style jsx>{`
          .lista {
            list-style: none;
            width: 600px;
            overflow: auto;
          }
          .item {
            text-align: center;
            vertical-align: middle;
            background: #e1e1e1;
            border-bottom: solid 1px black;
            height: 300px;
          }
          .item.selected {
            color: red;
          }
        `}
        </style>
        {items.map(item => (
          <li className={`item ${item.id == selected ? 'selected' : ''}`} key={item.id}>
            <Element name={item.id}>
              {item.texto}
            </Element>
          </li>
        ))}
      </ul>
    );
  }

}

export default observer(List);
