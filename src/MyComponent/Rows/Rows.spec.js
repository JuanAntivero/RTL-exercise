import Rows from './Rows';
import { shallow } from 'enzyme';

const props = {
    rows: [
        {
          caption: "caption1",
          key: "1"
        },
        {
          caption: "caption2",
          key: "2"
        },
        {
          caption: "caption3",
          key: "3"
        },
        {
          caption: "caption4",
          key: "4"
        }
    ],
    type: 'blue',
};

describe('Rows', () => {
    const wrapper = shallow(<Rows {...props} />);
    it('should render 4 rows', () => {
        const rows = wrapper.find('.text');
        expect(rows).toHaveLength(4);
        expect(rows.at(0).text()).toBe('caption1');
        expect(rows.at(1).text()).toBe('caption2');
        expect(rows.at(2).text()).toBe('caption3');
        expect(rows.at(3).text()).toBe('caption4');
    });

    it('should render 4 blue rows when type is blue', () => {
        expect(wrapper.find('.blue-circle')).toHaveLength(4);
        expect(wrapper.find('.dropdown')).toHaveLength(0);
    });
    
    it('should render 4 dropdown rows when type is dropdown', () => {
        const dropdownWrapper = shallow(<Rows {...props} type={'dropdown'} />);
        expect(dropdownWrapper.find('.blue-circle')).toHaveLength(0);
        expect(dropdownWrapper.find('.dropdown')).toHaveLength(4);
    });
});