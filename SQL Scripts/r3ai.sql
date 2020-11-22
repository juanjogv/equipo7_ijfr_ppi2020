#Script de la creacion de la Base de datos de R3AI por 
#Juan Pablo Rivera
#Juan Jose Garcia
#Danna Gimena Cortes
#Sebastan Mendoza 
#INEM "Jose Felix de Restrepo"

create database r3ai;
use r3ai;

drop database r3ai;
select * from usuario;

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
    
drop table publicacion;
    
    
    
#-------------------------------------------------------------------------------------------------------------   
#Creacion de la tabla usuario
CREATE TABLE usuario(
    id_usuario INT(11) NOT NULL,
    nombre_usuario varchar(100) NOT NULL,
    contrasena_usuario varchar(60) NOT NULL,
    apellido_usuario varchar(100) NOT NULL,
    email_usuario varchar(100) NOT NULL,
    foto_usuario varchar(100),
	descripcion_usuario varchar(500),
    escaneos_usuario int(11) NOT NULL
);

ALTER TABLE usuario
    ADD PRIMARY KEY (id_usuario);

ALTER TABLE usuario
    MODIFY id_usuario INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;
    

#-------------------------------------------------------------------------------------------------------------   
#inserts de la tabla Publicaciones

select * from publicacion;

insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('User-centric', 'http://dummyimage.com/500x500.png/dddddd/000000', 'posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac', '2020-04-26 00:59:10', 1);
insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('mission-critical', 'http://dummyimage.com/500x500.png/ff4444/ffffff', 'aliquet maecenas leo odio condimentum id luctus nec molestie sed', '2020-09-27 06:58:03', 2);
insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('productivity', 'http://dummyimage.com/500x500.png/cc0000/ffffff', 'auctor sed tristique in tempus sit amet sem fusce consequat', '2020-05-20 02:50:22', 3);
insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('Down-sized', 'http://dummyimage.com/500x500.png/5fa2dd/ffffff', 'lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus', '2020-07-11 00:00:37', 4);
insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('eco-centric', 'http://dummyimage.com/500x500.png/cc0000/ffffff', 'odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in', '2020-10-21 06:22:51', 5);
insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('multi-tasking', 'http://dummyimage.com/500x500.png/cc0000/ffffff', 'adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci', '2020-07-16 20:37:08', 1);
insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('encompassing', 'http://dummyimage.com/500x500.png/cc0000/ffffff', 'primis in faucibus orci luctus et ultrices posuere cubilia curae donec', '2020-09-09 22:40:08', 2);
insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('implementation', 'http://dummyimage.com/500x500.png/dddddd/000000', 'non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis', '2020-02-01 16:22:17', 3);
insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('instruction set', 'http://dummyimage.com/500x500.png/cc0000/ffffff', 'in ante vestibulum ante ipsum primis in faucibus orci luctus', '2020-03-05 12:30:04', 4);
insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('Multi-channelled', 'http://dummyimage.com/500x500.png/dddddd/000000', 'nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas', '2020-07-13 19:21:15', 5);
insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('archive', 'http://dummyimage.com/500x500.png/5fa2dd/ffffff', 'justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id', '2020-07-20 06:10:51', 1);
insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('user-facing', 'http://dummyimage.com/500x500.png/cc0000/ffffff', 'fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc', '2020-05-27 23:21:26', 2);
insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('Automated', 'http://dummyimage.com/500x500.png/5fa2dd/ffffff', 'eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in', '2020-09-12 03:00:55', 3);
insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('core', 'http://dummyimage.com/500x500.png/cc0000/ffffff', 'hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut', '2020-06-13 00:59:29', 4);
insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('open architecture', 'http://dummyimage.com/500x500.png/dddddd/000000', 'ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue', '2020-09-08 10:24:36', 5);
insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('archive', 'http://dummyimage.com/500x500.png/ff4444/ffffff', 'nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae', '2020-09-28 06:47:39', 1);
insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('background', 'http://dummyimage.com/500x500.png/5fa2dd/ffffff', 'et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et', '2020-02-21 22:20:37', 2);
insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('Integrated', 'http://dummyimage.com/500x500.png/cc0000/ffffff', 'consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis', '2020-08-05 05:12:49', 3);
insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('ability', 'http://dummyimage.com/500x500.png/5fa2dd/ffffff', 'dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris', '2020-10-21 05:47:02', 4);
insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('methodical', 'http://dummyimage.com/500x500.png/ff4444/ffffff', 'erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam', '2020-03-31 21:53:14', 5);
insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('encryption', 'http://dummyimage.com/500x500.png/cc0000/ffffff', 'eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in', '2020-02-15 14:41:52', 1);
insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('content-based', 'http://dummyimage.com/500x500.png/cc0000/ffffff', 'libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum', '2020-10-03 00:23:18', 2);
insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('Vision-oriented', 'http://dummyimage.com/500x500.png/dddddd/000000', 'pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet', '2020-07-22 22:50:00', 3);
insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('benchmark', 'http://dummyimage.com/500x500.png/ff4444/ffffff', 'faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi', '2020-03-09 15:35:03', 4);
insert into publicacion (titulo_publicacion, img_publicacion, body_publicacion, fecha_publicacion, id_usuario) values ('array', 'http://dummyimage.com/500x500.png/5fa2dd/ffffff', 'cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi', '2020-02-10 22:14:48', 5);


    
    
    