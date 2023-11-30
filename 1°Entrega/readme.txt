Profe:
Con base en nuestra implementación actual de productos, modificar el método GET / para que cumpla con los siguientes puntos:
Deberá poder recibir por query params un limit (opcional), una page (opcional), un sort (opcional) y un query (opcional)
-limit permitirá devolver sólo el número de elementos solicitados al momento de la petición, en caso de no recibir limit, éste será de 10.
page permitirá devolver la página que queremos buscar, en caso de no recibir page, ésta será de 1
query, el tipo de elemento que quiero buscar (es decir, qué filtro aplicar), en caso de no recibir query, realizar la búsqueda general
sort: asc/desc, para realizar ordenamiento ascendente o descendente por precio, en caso de no recibir sort, no realizar ningún ordenamiento
El método GET deberá devolver un objeto con el siguiente formato:
{
	status:success/error
payload: Resultado de los productos solicitados
totalPages: Total de páginas
prevPage: Página anterior
nextPage: Página siguiente
page: Página actual
hasPrevPage: Indicador para saber si la página previa existe
hasNextPage: Indicador para saber si la página siguiente existe.
prevLink: Link directo a la página previa (null si hasPrevPage=false)
nextLink: Link directo a la página siguiente (null si hasNextPage=false)
}
Se deberá poder buscar productos por categoría o por disponibilidad, y se deberá poder realizar un ordenamiento de estos productos de manera ascendente o descendente por precio.
Todo esto esta en inde.router
si se dirige a http://localhost:8080/products, se puede visualizar lo pedido,
si en postman se dirige al POST: http://localhost:8080/api/carts/(_id del carrito)/products/(_id del producto) (y en el body pone :
{
      quantity: (cantidad deseada)
}
)
se agrega el producto con la cantidad deseada, si repite el proceso del mismo producto, aumenta la cantidad en la que se desee

si en postman se dirige al DELETE: http://localhost:8080/api/carts/(_id del carrito), elimina todos los productos del carrito
si en postman se dirige al DELETE: http://localhost:8080/api/carts/(_id del carrito)/products/(_id del producto), elimina un producto en particular
si en postman se dirige al PUT: http://localhost:8080/api/carts/(_id del carrito)/products/(_id del producto) (y en el body pone :
{
      quantity: (cantidad deseada)
}
)
modifica la cantidad de dicho producto 
