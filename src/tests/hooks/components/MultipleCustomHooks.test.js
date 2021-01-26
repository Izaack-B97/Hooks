import { shallow } from "enzyme"
import { MultiplesCustomHooks } from "../../../Components/03-examples/MultiplesCustomHooks"
import { useCounter } from "../../../hooks/useCounter";
import { useFetch } from "../../../hooks/useFetch";

jest.mock("../../../hooks/useFetch"); // Sirve para fingor la data 
jest.mock("../../../hooks/useCounter");

describe('Pruebas en <MultipleCustomHooks />' , () => {

    useCounter.mockReturnValue({
        counter: 1, 
        increment: () => {}
    });

    test('debe de mostrarse correctamente  ', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        
        const wrapper = shallow( <MultiplesCustomHooks /> );
        expect( wrapper ).toMatchSnapshot();
    });
    
    test('debe de mostrar la informacion ', () => {
    
        useFetch.mockReturnValue({
            loading: false,
            error: null,
            data: [{
                author: 'Isaac Bustamante',
                quote: 'Hola mundo'
            }]
        });

        const wrapper = shallow( <MultiplesCustomHooks /> );

        console.log( wrapper.html() );

        expect( wrapper.find('.alert').exists() ).toBe( false );
        expect( wrapper.find('p').text().trim() ).toBe( 'Hola mundo' );
        expect( wrapper.find('footer').text().trim() ).toBe( 'Isaac Bustamante' );

    });
    


});