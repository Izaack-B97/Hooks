import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from '../../hooks/useFetch';

describe('Pruebas en useFetch ', () => {

    test('debe de retornar los valores por defecto ', () => {

        const url = 'https://www.breakingbadapi.com/api/quotes/1';
        const { result } = renderHook(() => useFetch( url ));
        const { loading, error, data } = result.current;
        
        expect( loading ).toBe( true );
        expect( error ).toBe( null );
        expect( data ).toBe( null );
    });
    
    test('debe retornar la info deseada, loading en false, error en null y data un array  ', async () => {
        // waitForNextUpdate espera la actualizacion del state y regresa una promesa
        const url = 'https://www.breakingbadapi.com/api/quotes/1';
        const { result, waitForNextUpdate } = renderHook(() => useFetch( url ));
        await waitForNextUpdate();

        const { loading, error, data } = result.current
        
        expect( data.length ).toBe( 1 );
        expect( loading ).toBe( false );
        expect( error ).toBe( null );
    });

    test('debe de manejar los errores ', async () => {
        
        const url = 'https://reqres.in/api2/users?page=2';
        const { result, waitForNextUpdate } = renderHook(() => useFetch( url ));
        await waitForNextUpdate();

        const { loading, error, data } = result.current

        expect( loading ).toBe( false );
        expect( data ).toBe( null );
        expect( error ).toBe('No se pudo cargar la data')
    });

});