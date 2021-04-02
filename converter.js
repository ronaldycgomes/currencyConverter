//Dólar ->Real
function conversao(){
    var v_dolar = document.getElementById('vDolar').value;
    var q_dolar = document.getElementById('qDolar').value; 
    
    v_dolar = parseFloat(v_dolar);
    q_dolar = parseFloat(q_dolar);
  
    result = v_dolar * q_dolar;
    document.getElementById('result').innerHTML =  "Valor em reais R$: "+ result.toFixed(2);
  }
  
  //Euro -> Real
  function conversao_2(){
    var v_euro = document.getElementById('vEuro').value;
    var q_euro = document.getElementById('qEuro').value; 
    
    v_euro = parseFloat(v_euro);
    q_euro = parseFloat(q_euro);
  
    result = v_euro * q_euro;
    document.getElementById('result_2').innerHTML =  "Valor em reais R$: "+ result.toFixed(2);
  }
  