import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class extends Component {
  @tracked center = new Date('2016-05-17');
  @tracked selectedRange = new Date('2016-05-17');
  range = {
    start: new Date('2016-05-10'),
    end: new Date('2016-05-15'),
  };
}
