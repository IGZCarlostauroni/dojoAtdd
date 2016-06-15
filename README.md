# dojoAtdd

## Objetivos

Los objetivo de este dojo son los siguientes:

* Demostrar cómo se desarrolla usando ATDD.
* Duración unas 2 horas.
* Descubrir mediante un caso práctico ventajas e inconvenientes.

## Audiencia

* Entre 8 y 10 personas.
* Personas con experiencia en desarrollo de software.

## Dinámica

* ¿Qué dudas han surgido en la implementación del test?
* Explicación que es un dojo.
* Presentación de kata que vamos a desarrollar.
* Desarrollo del dojo
  * El dojo será de tipo kake. 
  * Se programa en parejas.
  * 3 turnos de 25 min. con 5 de descanso entre cada turno.
  * Cada turno se cambia de pareja.
* 25 min. de retrospectiva, feedback y preguntas.

## Kata

Se ha elegido un kata de la lista de katas clásicos de la lista de Dave Thomas http://codekata.com/kata/kata09-back-to-the-checkout es un kata que consiste en añadir productos a la cuenta de un supermercado. Existe una lista de precios cerrada con la que se calculara el valor total de la cuenta del supermercado.

## Implementación

La implementación se hará usando un servicio rest implementado en nodejs. El servicio implementa el siguiente API:

```
Crear un nuevo checkout

POST /api/checkout

Response 201

Location: /api/checkout/{id}

```

```
Dar el valor de un checkout existente

GET /api/checkout/{id}

Response 200

Response: {
   total: {
     value: 20,
     currency:"EUR"
   }
}
```

```
POST /api/checkout/{id}/items

Response 201

Location: /api/checkout/{id}/items/{id}

```
