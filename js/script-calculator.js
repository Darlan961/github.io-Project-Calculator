function calcular(_$_type, _$_value) {
    console.log(_$_type, _$_value)

    if (_$_type === 'number') {

        // Recuperando e atribuindo o Valor que foi passado como parâmetro da fuction e concatenando com o valor já existente no campo.

        document.getElementById('result-value').value += _$_value;


    } else if (_$_type === 'opd') {

        if (_$_value === '=') {
            var result_final = document.getElementById('result-value').value

            document.getElementById('result-value').value = eval(result_final)
        }
        if (_$_value !== '=') {
            document.getElementById('result-value').value += _$_value;
        }
        if (_$_value === 'clear') {
            document.getElementById('result-value').value = '';

        }

    }





}