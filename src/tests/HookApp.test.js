import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe('Pruebas en <HookApp />' , () => {
    
    test('debe de reenderizar el hola mundo ', () => {
        
        const wrapper = shallow( <HookApp /> );

        expect( wrapper ).toMatchSnapshot();

    });
    
});