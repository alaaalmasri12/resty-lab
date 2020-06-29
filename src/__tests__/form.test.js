
import React from 'react';
import { shallow, mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../components/form/form';

describe('<Form/>', ()=> {
  it('store the users input into state', ()=> {
        let app =mount(<Form />);
        let input = app.find('input');
        input.simulate('change',{ target: { value: 'alaa' } });
        expect(app.state('url')).toEqual('alaa');
    });
    it('Does it properly display the users input in the output area on form submit', ()=> {
        let app = mount(<Form />);
        let input = app.find('input');
        input.simulate('change',{ target: { value: 'alaa' } });
        let form = app.find('form');
        form.simulate('submit');
        expect(app.find('.url').text()).toContain('alaa');
    });
    it('    Does it properly clear the form/state after the form is submitted', ()=> {
        let app = mount(<Form />);
        let form = app.find('form');
        form.simulate('submit');
        expect(app.state('url','method','request')).toEqual('');
    });

    });
