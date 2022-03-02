/* global Chart */
import Component from '@ember/component';

export default Component.extend({
  tagName: 'canvas',
  attributeBindings: ['width', 'height'],

  didInsertElement() {
    this._super(...arguments);
    let context = this.element;
    let data = this.data;
    let type = this.type;
    let options = this.options;

    let chart = new Chart(context, {
      type: type,
      data: data,
      options: options,
    });
    this._register();
    this.set('chart', chart);
  },

  willDestroyElement() {
    this._super(...arguments);
    this.chart.destroy();
  },

  didUpdateAttrs() {
    this._super(...arguments);
    this.updateChart();
  },

  _register() {
    this.register?.(this);
  },

  updateChart() {
    let chart = this.chart;
    let data = this.data;
    let type = this.type;
    let options = this.options;
    let animate = this.animate;

    if (chart) {
      chart.config.data = data;
      chart.config.type = type;
      chart.config.options = options;
      if (animate) {
        chart.update();
      } else {
        chart.update(0);
      }
    }
  },
});
