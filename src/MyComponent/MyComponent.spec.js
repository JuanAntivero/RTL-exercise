import MyComponent from './MyComponent';
import { mount } from 'enzyme';
import Rows from "./Rows";

jest.mock("./Rows", () => () => <div>Rows</div>);

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
    title: 'Test Title',
    type: 'blue',
};

describe('MyComponent', () => {
    const wrapper = mount(<MyComponent {...props} />)
    it('should render a title', ()=> {
        expect(wrapper.find('h1').text()).toBe('Test Title');
    });
    it('should render rows', () => {
        const rows = wrapper.find(Rows);
        expect(rows.exists()).toBe(true);
        expect(rows.props().rows).toBe(props.rows);
        expect(rows.props().type).toBe('blue');
    })
})