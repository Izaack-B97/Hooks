import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from '../../hooks/useForm.js';

describe('Prueba en useForm' , () => {

    const initialForm = {
        name: 'Isaac Bustamante',
        email: 'izaack.97@gmail.com'
    };

    test('debe regresar un formulario por defecto ', () => {

        const { result }  = renderHook(() => useForm( initialForm ));
        const [ values ] = result.current;

        expect( values ).toEqual( initialForm );
        
    });
    
    test('debe de cambiar el valor del fomulario (name) ', () => {
        
        const { result } = renderHook(() => useForm( initialForm ));
        const [ ,handleInputChange ] = result.current;
        
        act(() => {
            handleInputChange({ target: { name: 'name', value:'Mario Ramirez' } })
        })
        
        const [ stateForm ] = result.current;
        const { name } = stateForm;

        expect( name ).toBe( 'Mario Ramirez' );
    })
    

    test('debe de re-establecer el formulario con RESET ', () => {
        
        const { result } = renderHook(() => useForm( initialForm ));
        const [ , handleInputChange, reset] = result.current;

        act(() => {
            handleInputChange({ 
                target: { 
                    name: 'name', 
                    value:'Mario Ramirez' 
                } 
            });
            
            reset();
        });

        const [ stateForm ] = result.current;
        
        expect( stateForm ).toEqual( initialForm );

    })
    

});