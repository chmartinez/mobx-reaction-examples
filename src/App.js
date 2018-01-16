import React from 'react';
import { computed, extendObservable, observable, reaction, runInAction } from 'mobx';
import { observer } from 'mobx-react';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeSelected = this.changeSelected.bind(this);

    this.store = observable({
      lista: [
        { id: 1, texto: 'UNO' },
        { id: 2, texto: 'DOS' },
        { id: 3, texto: 'TRES' },
        { id: 4, texto: 'CUATRO' },
        { id: 5, texto: 'CINCO' },
        { id: 6, texto: 'SEIS' },
        { id: 7, texto: 'SIETE' },
        { id: 8, texto: 'OCHO' },
        { id: 9, texto: 'NUEVE' },
        { id: 10, texto: 'DIEGARDO' }
      ],
      itemSelected: 1
    });
  }
  // action
  changeSelected({ target }) {
    const newId = target.getAttribute('data-id');
    runInAction('changing selection', () => this.store.itemSelected = newId)
  }

  render() {
    return (
      <div>
        <style jsx>{`
          .buttonList {
            position: fixed;
            left: 0;
            z-index: 1;
          }
        `}
        </style>
        <div className="buttonList">
          {this.store.lista.map(item => (
            <button key={item.id} data-id={item.id} onClick={this.changeSelected}>Select {item.texto}</button>
          ))}
        </div>
        <List store={this.store} />
      </div>
    );
  }
}

export default observer(App);
