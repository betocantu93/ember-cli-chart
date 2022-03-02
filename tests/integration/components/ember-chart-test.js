import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import EmberObject from '@ember/object';

module('Integration | Component | ember-chart', function (hooks) {
  setupRenderingTest(hooks);
  const ChartTestData = EmberObject.extend({
    pieValue1: 300,
    pieValue2: 50,
    pieValue3: 100,
    pieData: Ember.computed('pieValue1', 'pieValue2', 'pieValue3', function () {
      return {
        labels: ['Red', 'Green', 'Yellow'],
        datasets: [
          {
            data: [
              parseInt(this.pieValue1),
              parseInt(this.pieValue2),
              parseInt(this.pieValue3),
            ],
            backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C'],
            hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870'],
          },
        ],
      };
    }),

    pieData2: Ember.computed(
      'pieValue1',
      'pieValue2',
      'pieValue3',
      function () {
        return {
          labels: ['Black', 'Red', 'Yellow'],
          datasets: [
            {
              data: [20, 310, 101],
              backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C'],
              hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870'],
            },
          ],
        };
      }
    ),

    labelValue1: 'January',
    lineValue1: 65,
    lineValue2: 59,
    lineData: Ember.computed(
      'lineValue1',
      'lineValue2',
      'labelValue1',
      function () {
        return {
          labels: [
            this.labelValue1,
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
          ],
          datasets: [
            {
              label: 'My First dataset',
              fillColor: 'rgba(220,220,220,0.2)',
              strokeColor: 'rgba(220,220,220,1)',
              pointColor: 'rgba(220,220,220,1)',
              pointStrokeColor: '#fff',
              pointHighlightFill: '#fff',
              pointHighlightStroke: 'rgba(220,220,220,1)',
              data: [
                parseInt(this.lineValue1),
                parseInt(this.lineValue2),
                80,
                81,
                56,
                55,
                40,
              ],
            },
            {
              label: 'My Second dataset',
              fillColor: 'rgba(151,187,205,0.2)',
              strokeColor: 'rgba(151,187,205,1)',
              pointColor: 'rgba(151,187,205,1)',
              pointStrokeColor: '#fff',
              pointHighlightFill: '#fff',
              pointHighlightStroke: 'rgba(151,187,205,1)',
              data: [28, 48, 40, 19, 86, 27, 90],
            },
          ],
        };
      }
    ),
    lineData2: Ember.computed('lineValue1', 'lineValue2', function () {
      return {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'My First dataset',
            fillColor: 'rgba(220,220,220,0.2)',
            strokeColor: 'rgba(220,220,220,1)',
            pointColor: 'rgba(220,220,220,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: [
              parseInt(this.lineValue1),
              parseInt(this.lineValue2),
              80,
              81,
              56,
              55,
              40,
            ],
          },
          {
            label: 'My Second dataset',
            fillColor: 'rgba(151,187,205,0.2)',
            strokeColor: 'rgba(151,187,205,1)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(151,187,205,1)',
            data: [28, 48, 40, 19, 86, 27, 90],
          },
          {
            label: 'My Third dataset',
            fillColor: 'rgba(151,187,205,0.2)',
            strokeColor: 'rgba(151,187,205,1)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(151,187,205,1)',
            data: [28, 48, 40, 19, 86, 27, 90],
          },
        ],
      };
    }),
    lineData3: Ember.computed(
      'lineValue1',
      'lineValue2',
      'labelValue1',
      function () {
        return {
          labels: [
            this.labelValue1,
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
          ],
          datasets: [
            {
              label: 'My First dataset',
              fillColor: 'rgba(220,220,220,0.2)',
              strokeColor: 'rgba(220,220,220,1)',
              pointColor: 'rgba(220,220,220,1)',
              pointStrokeColor: '#fff',
              pointHighlightFill: '#fff',
              pointHighlightStroke: 'rgba(220,220,220,1)',
              data: [
                parseInt(this.lineValue1),
                parseInt(this.lineValue2),
                80,
                81,
              ],
            },
            {
              label: 'My Second dataset',
              fillColor: 'rgba(151,187,205,0.2)',
              strokeColor: 'rgba(151,187,205,1)',
              pointColor: 'rgba(151,187,205,1)',
              pointStrokeColor: '#fff',
              pointHighlightFill: '#fff',
              pointHighlightStroke: 'rgba(151,187,205,1)',
              data: [28, 48, 40, 19, 86, 27, 90],
            },
          ],
        };
      }
    ),
    barData: Ember.computed(function () {
      return {
        labels: ['January', 'February', 'March'],
        datasets: [
          {
            label: 'My First dataset',
            fillColor: 'rgba(220,220,220,0.2)',
            strokeColor: 'rgba(220,220,220,1)',
            pointColor: 'rgba(220,220,220,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: [55, 41, 80],
          },
          {
            label: 'My Second dataset',
            fillColor: 'rgba(151,187,205,0.2)',
            strokeColor: 'rgba(151,187,205,1)',
            pointColor: 'rgba(151,187,205,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(151,187,205,1)',
            data: [28, 48, 40],
          },
        ],
      };
    }),
  });
  let testData = ChartTestData.create();

  test('it can be a pie chart', async function (assert) {
    let component;
    this.set('type', 'pie');
    this.set('data', testData.get('pieData'));
    this.set('register', (instance) => {
      component = instance;
    });

    await render(
      hbs`<EmberChart @type={{this.type}} @data={{this.data}} @register={{this.register}}/>`
    );

    let chart = component.chart;
    assert.equal(chart.config.type, 'pie');
    assert.equal(chart.data.datasets[0].data.length, 3);
  });

  test('it can be a line chart', async function (assert) {
    let component;
    this.set('type', 'line');
    this.set('data', testData.get('lineData'));
    this.set('register', (instance) => {
      component = instance;
    });

    await render(
      hbs`<EmberChart @type={{this.type}} @data={{this.data}} @register={{this.register}}/>`
    );

    let chart = component.get('chart');

    assert.equal(chart.config.type, 'line');
    assert.equal(chart.data.datasets.length, 2);
  });

  test('it can be a bar chart', async function (assert) {
    let component;
    this.set('type', 'bar');
    this.set('data', testData.get('lineData'));
    this.set('register', (instance) => {
      component = instance;
    });

    await render(
      hbs`<EmberChart @type={{this.type}} @data={{this.data}} @register={{this.register}}/>`
    );
    let chart = component.get('chart');

    assert.equal(chart.config.type, 'bar');
    assert.equal(chart.data.datasets.length, 2);
  });

  test('it can be a Radar chart', async function (assert) {
    let component;
    this.set('type', 'radar');
    this.set('data', testData.get('lineData'));
    this.set('register', (instance) => {
      component = instance;
    });

    await render(
      hbs`<EmberChart @type={{this.type}} @data={{this.data}} @register={{this.register}}/>`
    );
    let chart = component.get('chart');

    assert.equal(chart.config.type, 'radar');
    assert.equal(chart.data.datasets.length, 2);
  });

  test('it can be a Polar Area chart', async function (assert) {
    let component;
    this.set('type', 'polarArea');
    this.set('data', testData.get('pieData'));
    this.set('register', (instance) => {
      component = instance;
    });

    await render(
      hbs`<EmberChart @type={{this.type}} @data={{this.data}} @register={{this.register}}/>`
    );
    let chart = component.get('chart');

    assert.equal(chart.config.type, 'polarArea');
    assert.equal(chart.data.datasets[0].data.length, 3);
  });

  test('it should update pie charts dynamically', async function (assert) {
    assert.expect(2);

    let component;
    this.set('type', 'pie');
    this.set('data', testData.get('pieData'));
    this.set('register', (instance) => {
      component = instance;
    });

    await render(
      hbs`<EmberChart @type={{this.type}} @data={{this.data}} @register={{this.register}}/>`
    );

    let chart = component.get('chart');
    assert.equal(chart.data.datasets[0].data[0], 300);

    // Update Data
    testData.set('pieValue1', 600);
    component.set('data', testData.get('pieData'));
    component.didUpdateAttrs();

    chart = component.get('chart');
    assert.equal(chart.data.datasets[0].data[0], 600);
  });

  test('it should update charts dynamically', async function (assert) {
    assert.expect(3);
    let component;
    this.set('type', 'line');
    this.set('data', testData.get('lineData'));
    this.set('register', (instance) => {
      component = instance;
    });

    await render(
      hbs`<EmberChart @type={{this.type}} @data={{this.data}} @register={{this.register}}/>`
    );
    let chart = component.get('chart');
    assert.equal(chart.data.datasets[0].data[0], 65);

    // Update Data
    testData.set('lineValue1', 105);
    component.set('data', testData.get('lineData'));
    component.didUpdateAttrs();

    chart = component.get('chart');
    assert.equal(chart.data.datasets[0].data[0], 105);

    // Update Labels
    testData.set('labelValue1', 'December');
    component.set('data', testData.get('lineData'));
    component.didUpdateAttrs();

    chart = component.get('chart');
    assert.equal(chart.data.labels[0], 'December');
  });
});
