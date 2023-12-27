### **MongoDB & Socket.io**

Este single-page lo hice para estudiar como funcionan los sockets, los cuales permiten un mejor flujo de datos entre el usuario y servidor. La pagina es simple y permite un CRD (create, read and delete), ademas de la funcion de "completar" ya que la pagina esta diseñada para "_trofeos_". 

![Screenshot_1](https://github.com/mateenunez/mongodb-socket.io/assets/62401255/935bee5f-2cdf-4eec-8336-b32f182a1dc0)

La pagina usa estilos de _Bootstrap_, como cartas (para los trofeos), una barra de progreso y un formulario basico. 

![Screenshot_2](https://github.com/mateenunez/mongodb-socket.io/assets/62401255/c09a1b88-08c6-46e3-aa3d-80a20551f146)

Los trofeos se listan en la misma pagina y se pueden eliminar o completar. Al completar un trofeo este guarda y muestra la fecha en la que fue completado. Ademas, suma uno a los trofeos completados y vuelve a calcular la barra de progreso.

![Screenshot_3](https://github.com/mateenunez/mongodb-socket.io/assets/62401255/1f37cc59-2acd-4246-ac99-97e13d6992c8)

Los trofeos pueden tener una fecha objetivo (si el usuario la ingresa en el formulario).
