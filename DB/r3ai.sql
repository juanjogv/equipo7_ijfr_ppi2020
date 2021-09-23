create database r3ai;
use r3ai;

CREATE TABLE usuario(
    id_usuario serial PRIMARY KEY,
    nombre_usuario VARCHAR(100) NOT NULL,
    apellido_usuario VARCHAR(100) NOT NULL,
    email_usuario VARCHAR(100) UNIQUE NOT NULL,
    contrasena_usuario VARCHAR(60) NOT NULL,
    foto_usuario VARCHAR(100),
	descripcion_usuario VARCHAR(500),
    escaneos_usuario INT NOT NULL
);

CREATE TABLE publicacion(
    id_publicacion serial PRIMARY KEY,
    titulo_publicacion VARCHAR(50) NOT NULL,
    body_publicacion VARCHAR(200) NOT NULL,
    img_publicacion VARCHAR(200) NOT NULL,
    fecha_publicacion  TIMESTAMP DEFAULT current_timestamp NOT NULL,
    id_usuario INT NOT NULL,
	CONSTRAINT fk_p_usuario FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE comentario(
    id_comentario serial PRIMARY KEY,
    contenido_comentario VARCHAR(200) NOT NULL,
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

-- ----------------------------
-- Records of usuario
-- ----------------------------
INSERT INTO "public"."usuario" VALUES (DEFAULT, 'Juan Jose', 'Garcia', 'juan@gmail.com', '$2a$10$UL55ZyuBhUe1f7SiwGLIEedtOh13fvQQMowUTIxfoCYD3pCSX5Fpy', 'https://robohash.org/praesentiumomnisperferendis.jpg?size=150x150&set=set1', NULL, 0);
INSERT INTO "public"."usuario" VALUES (DEFAULT, 'Juan David', 'Toro', 'toro@gmail.com', '$2a$10$UL55ZyuBhUe1f7SiwGLIEedtOh13fvQQMowUTIxfoCYD3pCSX5Fpy', 'https://robohash.org/utdoloribusquia.jpg?size=150x150&set=set1', NULL, 0);
INSERT INTO "public"."usuario" VALUES (DEFAULT, 'Jacobo', 'Uribe', 'jacobo@gmail.com', '$2a$10$UL55ZyuBhUe1f7SiwGLIEedtOh13fvQQMowUTIxfoCYD3pCSX5Fpy', 'https://robohash.org/molestiaeetdelectus.jpg?size=150x150&set=set1', NULL, 0);
INSERT INTO "public"."usuario" VALUES (DEFAULT, 'Aaron', 'Cubillos', 'aaron@gmail.com', '$2a$10$UL55ZyuBhUe1f7SiwGLIEedtOh13fvQQMowUTIxfoCYD3pCSX5Fpy', 'https://robohash.org/fugiataddoloribus.jpg?size=150x150&set=set1', NULL, 0);
INSERT INTO "public"."usuario" VALUES (DEFAULT, 'Maria Jose', 'Ruiz', 'majo@gmail.com', '$2a$10$UL55ZyuBhUe1f7SiwGLIEedtOh13fvQQMowUTIxfoCYD3pCSX5Fpy', 'https://robohash.org/temporaquisquamet.jpg?size=150x150&set=set1', NULL, 0);

-- ----------------------------
-- Records of publicacion
-- ----------------------------
insert into publicacion values (DEFAULT, 'instruction set', 'in ante vestibulum ante ipsum primis in faucibus orci luctus', 'http://dummyimage.com/400x400.png/cc0000/ffffff', '2020-03-05 12:30:04', 4);
insert into publicacion values (DEFAULT, 'Multi-channelled', 'nibh in quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas', 'http://dummyimage.com/400x400.png/ff4444/ffffff', '2020-07-13 19:21:15', 5);
insert into publicacion values (DEFAULT, 'archive', 'justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id', 'http://dummyimage.com/400x400.png/5fa2dd/ffffff', '2020-07-20 06:10:51', 1);
insert into publicacion values (DEFAULT, 'user-facing', 'fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc', 'http://dummyimage.com/400x400.png/dddddd/000000', '2020-05-27 23:21:26', 2);
insert into publicacion values (DEFAULT, 'Automated', 'eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in', 'http://dummyimage.com/400x400.png/ff4444/ffffff', '2020-09-12 03:00:55', 3);
insert into publicacion values (DEFAULT, 'core', 'hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut', 'http://dummyimage.com/400x400.png/ff4444/ffffff', '2020-06-13 00:59:29', 4);
insert into publicacion values (DEFAULT, 'open architecture', 'ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue', 'http://dummyimage.com/400x400.png/dddddd/000000', '2020-09-08 10:24:36', 5);
insert into publicacion values (DEFAULT, 'archive', 'nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae', 'http://dummyimage.com/400x400.png/5fa2dd/ffffff', '2020-09-28 06:47:39', 1);
insert into publicacion values (DEFAULT, 'background', 'et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et', 'http://dummyimage.com/400x400.png/5fa2dd/ffffff', '2020-02-21 22:20:37', 2);
insert into publicacion values (DEFAULT, 'Integrated', 'consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis', 'http://dummyimage.com/400x400.png/ff4444/ffffff', '2020-08-05 05:12:49', 3);
insert into publicacion values (DEFAULT, 'ability', 'dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris', 'http://dummyimage.com/400x400.png/cc0000/ffffff', '2020-10-21 05:47:02', 4);
insert into publicacion values (DEFAULT, 'methodical', 'erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam', 'http://dummyimage.com/400x400.png/dddddd/000000', '2020-03-31 21:53:14', 5);
insert into publicacion values (DEFAULT, 'encryption', 'eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in', 'http://dummyimage.com/400x400.png/dddddd/000000', '2020-02-15 14:41:52', 1);
insert into publicacion values (DEFAULT, 'content-based', 'libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum', 'http://dummyimage.com/400x400.png/cc0000/ffffff', '2020-10-03 00:23:18', 2);
insert into publicacion values (DEFAULT, 'Vision-oriented', 'pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet', 'http://dummyimage.com/400x400.png/5fa2dd/ffffff', '2020-07-22 22:50:00', 3);
insert into publicacion values (DEFAULT, 'benchmark', 'faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi', 'http://dummyimage.com/400x400.png/cc0000/ffffff', '2020-03-09 15:35:03', 4);
insert into publicacion values (DEFAULT, 'array', 'cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi', 'http://dummyimage.com/400x400.png/ff4444/ffffff', '2020-02-10 22:14:48', 5);

-- ----------------------------
-- Records of comentario
-- ----------------------------
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


SELECT * FROM usuario ORDER BY escaneos_usuario desc;

    