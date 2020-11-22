#Script de la creacion de la Base de datos de R3AI por 
#Juan Pablo Rivera
#Juan Jose Garcia
#Danna Gimena Cortes
#Sebastan Mendoza 
#INEM "Jose Felix de Restrepo"

create database r3ai;
use r3ai;



#-------------------------------------------------------------------------------------------------------------   
#Creacion de la tabla comentario
CREATE TABLE comentario(
    id_comentario INT(11) NOT NULL,
    contenido_comentario varchar(50) NOT NULL,  
    fecha_comentario  timestamp NOT NULL DEFAULT current_timestamp,
    id_usuario INT(11) NOT NULL,
	CONSTRAINT fk_c_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
	id_publicacion INT(11) NOT NULL,
	CONSTRAINT fk_c_publicacion FOREIGN KEY (id_publicacion) REFERENCES publicacion(id_publicacion)
);

ALTER TABLE comentario
    ADD PRIMARY KEY (id_comentario);

ALTER TABLE comentario
    MODIFY id_comentario INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;
    
#-------------------------------------------------------------------------------------------------------------   
#Creacion de la tabla Escaneo
CREATE TABLE escaneo(
    id_escaneo INT(11) NOT NULL,
    fecha_escaneo  timestamp NOT NULL DEFAULT current_timestamp,
    id_usuario INT(11) NOT NULL,
	CONSTRAINT fk_e_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

ALTER TABLE escaneo
    ADD PRIMARY KEY (id_escaneo);

ALTER TABLE escaneo
    MODIFY id_escaneo INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;
    
    

#-------------------------------------------------------------------------------------------------------------   
#Creacion de la tabla Publicacion
CREATE TABLE publicacion(
    id_publicacion INT(11) NOT NULL,
    titulo_publicacion varchar(50) NOT NULL,
    img_publicacion varchar(200) NOT NULL,
    fecha_publicacion  timestamp NOT NULL DEFAULT current_timestamp,
    id_usuario INT(11) NOT NULL,
	CONSTRAINT fk_p_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

ALTER TABLE publicacion
    ADD PRIMARY KEY (id_publicacion);

ALTER TABLE publicacion
    MODIFY id_publicacion INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;
    
    
    
#-------------------------------------------------------------------------------------------------------------   
#Creacion de la tabla usuario
CREATE TABLE usuario(
    id_usuario INT(11) NOT NULL,
    nombre_usuario varchar(100) NOT NULL,
    contrasena_usuario varchar(60) NOT NULL,
    apellido_usuario varchar(100) NOT NULL,
    email_usuario varchar(100) NOT NULL,
    foto_usuario varchar(100),
	descripcion_usuario varchar(500)
);

ALTER TABLE usuario
    ADD PRIMARY KEY (id_usuario);

ALTER TABLE usuario
    MODIFY id_usuario INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;