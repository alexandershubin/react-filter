import React from 'react';
import {Filter} from './Filter';
import {ListItem} from './ListItem';
import {load} from '../models/configurations';

export class Configuration extends React.Component {
  constructor() {
    super();

    this.state = {
      items: [],
      range: 6,
      gpu: false,
      raid: false,
      ssd: false
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox'
      ? target.checked
      : target.type === 'range'
        ? Number(target.value)
        : target.value;

    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  componentDidMount() {
    const setLoading = this.props.setLoading;
    setLoading(true);

    load()
      .then((data) => {
        this.setState({items: data});
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.log('Ошибка при загрузке: ', error)
      })
    }

  getFilteredItems() {
    const hasGPU = item => item.gpu;
    const hasSSD = item => item.disk.type === 'SSD';
    const hasRAID = item => item.disk.count > 2;
    const hasEnoughCores = (coresCount, item) => item.cpu.cores * item.cpu.count >= coresCount;

    return this.state.items.filter(item => {
      return !(this.state.gpu && !hasGPU(item)
        || this.state.ssd && !hasSSD(item)
        || this.state.raid && !hasRAID(item)
        || !hasEnoughCores(this.state.range, item));
    });
  }

  render() {
    const items = this.getFilteredItems();

    return (
      <section className="configuration container">
        <div className="configuration__wrapper">
          <h2>Доступные конфигурации</h2>
          <div className="configuration__paginator">
            <Filter
              handleFilterChange={this.handleFilterChange}
              range={this.state.range}
              raid={this.state.raid}
              ssd={this.state.ssd}
              gpu={this.state.gpu}
            />
            <p>Performance Line</p>
            <ul className="product">
              {items.map(item => <ListItem item={item} key={item.name + item.price}/>)}
              {!items.length && 'Нет результатов...'}
            </ul>
          </div>
        </div>
      </section>
    )
  }
}
