<h1>Roman Numeral Converter</h1>

<p>This converter makes use of the conversion rules to Roman numerals.</p>

![romanTable](https://github.com/jigcolapaolo/Roman-Numeral-Converter/assets/145474462/f5010bbd-bcad-4daf-b54e-ace900890717)

<h3>[English]</h3>
<p>
  What I did was to create an array with this data to be used in the function convertToRoman().<br>
  First, the input is validated to ensure that numbers are entered.<br>
  Then, in the function, I convert the entered numbers into an array, dividing them by digits<br>
  and reversing them.<br>
  I determine how many digits the entered number has and filter the data from the romanArabic array.<br>
  Once done, I iterate through the data to be used with each digit; if the exact number matches,<br>
  the Roman numeral is added to 'result' as a string.<br>
  If the exact number is not found, the data is filtered again to make the search simpler.<br>
  There should be only 2 data left, depending on whether it's a unit, ten, hundred, or thousand.<br>
  Once there, the difference is calculated between the smaller number without considering zeros, and the lowest Roman numeral<br>
  according to the unit is added, and it is repeated according to the difference result.<br>
  This process continues until the complete string of Roman numerals is formed.
</p>
<p>
  Only HTML, CSS, and JavaScript are used.
</p>



<h3>[Spanish]</h3>
<p>
  Lo que hice fue crear un array con estos datos para que sean utilizados en la función convertToRoman().<br>
  Primero, se valida el input para asegurarse de que se ingresen números.<br>
  Luego, en la función, convierto los números ingresados en un array, dividiéndolos por cifras<br>
  e invirtiéndolos.<br>
  Se determina cuántos dígitos tiene el número ingresado y se filtran los datos del array romanArabic.<br>
  Una vez hecho esto, se recorren los datos a utilizar con cada dígito; si coincide el número exacto,<br>
  se agrega el número romano a 'result' como string.<br>
  En caso de no encontrar el número exacto, se vuelve a filtrar los datos para hacer la búsqueda más sencilla.<br>
  Deberían quedar solo 2 datos, según si es unidad, decena, centena o mil.<br>
  Una vez ahí, se hace la diferencia entre el número menor sin tener en cuenta los ceros, y se va agregando<br>
  el número romano más bajo según la unidad que sea, y se repite según el resultado de la diferencia.<br>
  Así se continúa hasta formar el string completo de números romanos.
</p>
<p>
  Solo utiliza HTML, CSS y JavaScript.
</p>

![image](https://github.com/jigcolapaolo/Roman-Numeral-Converter/assets/145474462/571784f0-dc01-4f1b-9473-1b7e918e3cb3)

