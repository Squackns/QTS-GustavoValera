let a = 'oi';
let b = 'ola';

Deno.test("teste do oi (NO API)", () => { 
    if ( a != "oi") {
        throw new Error('$(a) não é oi!')
    } 

})

Deno.test("Não pode ser oi (NO API)", () => { 
    if ( a == "oi") {
        throw new Error('$(a) é oi!')
    } 

})