import ArrowDownIcon from './ArrowDownIcon';
import { shallow } from 'enzyme';

describe('ArrowDownIcon', () => {
    const wrapper = shallow(<ArrowDownIcon />);
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})