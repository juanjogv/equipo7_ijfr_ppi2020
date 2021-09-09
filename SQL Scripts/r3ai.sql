create database r3ai;
use r3ai;

CREATE TABLE usuario(
    id_usuario serial PRIMARY KEY,
    nombre_usuario VARCHAR(100) NOT NULL,
    contrasena_usuario VARCHAR(60) NOT NULL,
    apellido_usuario VARCHAR(100) NOT NULL,
    email_usuario VARCHAR(100) NOT NULL,
    foto_usuario VARCHAR(100),
	descripcion_usuario VARCHAR(500),
    escaneos_usuario INT NOT NULL
);

CREATE TABLE publicacion(
    id_publicacion serial PRIMARY KEY,
    titulo_publicacion VARCHAR(50) NOT NULL,
    img_publicacion VARCHAR(200) NOT NULL,
    fecha_publicacion  TIMESTAMP DEFAULT current_timestamp NOT NULL,
    id_usuario INT NOT NULL,
	CONSTRAINT fk_p_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE comentario(
    id_comentario serial PRIMARY KEY,
    contenido_comentario VARCHAR(50) NOT NULL,
    fecha_comentario TIMESTAMP DEFAULT current_timestamp NOT NULL,
    id_usuario INT NOT NULL,
	CONSTRAINT fk_c_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
	id_publicacion INT NOT NULL,
	CONSTRAINT fk_c_publicacion FOREIGN KEY (id_publicacion) REFERENCES publicacion(id_publicacion)
);

CREATE TABLE escaneo(
    id_escaneo SERIAL PRIMARY KEY,
    fecha_escaneo TIMESTAMP DEFAULT current_timestamp NOT NULL,
    id_usuario INT NOT NULL,
	CONSTRAINT fk_e_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);


#-------------------------------------------------------------------------------------------------------------   
#inserts de la tabla Publicaciones


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


#-------------------------------------------------------------------------------------------------------------   
#inserts de la tabla Comentario



insert into comentario (id_comentario, contenido_comentario, fecha_comentario, id_usuario, id_publicacion) values (1, 'faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus', '2019-03-19 19:41:01', 1, 1);
insert into comentario (id_comentario, contenido_comentario, fecha_comentario, id_usuario, id_publicacion) values (2, 'lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id', '2020-10-04 07:09:39', 2, 2);
insert into comentario (id_comentario, contenido_comentario, fecha_comentario, id_usuario, id_publicacion) values (3, 'nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat', '2020-05-12 15:39:03', 3, 3);
insert into comentario (id_comentario, contenido_comentario, fecha_comentario, id_usuario, id_publicacion) values (4, 'eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim', '2020-07-03 14:14:37', 4, 4);
insert into comentario (id_comentario, contenido_comentario, fecha_comentario, id_usuario, id_publicacion) values (5, 'nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est', '2019-04-22 20:34:57', 5, 5);
insert into comentario (id_comentario, contenido_comentario, fecha_comentario, id_usuario, id_publicacion) values (6, 'orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor', '2019-08-20 22:40:23', 1, 6);
insert into comentario (id_comentario, contenido_comentario, fecha_comentario, id_usuario, id_publicacion) values (7, 'consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere', '2020-07-17 07:57:46', 2, 7);
insert into comentario (id_comentario, contenido_comentario, fecha_comentario, id_usuario, id_publicacion) values (8, 'eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat', '2019-10-03 04:53:26', 3, 8);
insert into comentario (id_comentario, contenido_comentario, fecha_comentario, id_usuario, id_publicacion) values (9, 'pede ac diam cras pellentesque volutpat dui maecenas tristique est', '2019-01-31 07:07:51', 4, 9);
insert into comentario (id_comentario, contenido_comentario, fecha_comentario, id_usuario, id_publicacion) values (10, 'augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia', '2019-11-25 01:37:01', 5, 10);
insert into comentario (id_comentario, contenido_comentario, fecha_comentario, id_usuario, id_publicacion) values (11, 'nonummy integer non velit donec diam neque vestibulum eget vulputate ut', '2019-02-06 20:52:17', 1, 11);
insert into comentario (id_comentario, contenido_comentario, fecha_comentario, id_usuario, id_publicacion) values (12, 'volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus', '2020-03-02 05:00:33', 2, 12);
insert into comentario (id_comentario, contenido_comentario, fecha_comentario, id_usuario, id_publicacion) values (13, 'morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis', '2019-03-11 04:35:31', 3, 13);
insert into comentario (id_comentario, contenido_comentario, fecha_comentario, id_usuario, id_publicacion) values (14, 'cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque', '2020-10-14 09:48:45', 4, 14);
insert into comentario (id_comentario, contenido_comentario, fecha_comentario, id_usuario, id_publicacion) values (15, 'nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam', '2020-01-29 21:19:05', 5, 15);


#-------------------------------------------------------------------------------------------------------------   
#Updates de la tabla Usuario


UPDATE usuario SET foto_usuario = "https://robohash.org/praesentiumomnisperferendis.jpg?size=150x150&set=set1" WHERE id_usuario = 1;
UPDATE usuario SET foto_usuario = "https://robohash.org/utdoloribusquia.jpg?size=150x150&set=set1" WHERE id_usuario = 2;
UPDATE usuario SET foto_usuario = "https://robohash.org/molestiaeetdelectus.jpg?size=150x150&set=set1" WHERE id_usuario = 3;
UPDATE usuario SET foto_usuario = "https://robohash.org/fugiataddoloribus.jpg?size=150x150&set=set1" WHERE id_usuario = 4;
UPDATE usuario SET foto_usuario = "https://robohash.org/temporaquisquamet.jpg?size=150x150&set=set1" WHERE id_usuario = 5;

SELECT * FROM usuario ORDER BY escaneos_usuario desc;

    