Aplicacion para el control de stickers del mundial, la misma se conecta a una base de datos mediante una API Node js.

Para el diseño de esta APP se utilizo JavaScript y componentes de Material UI.

A continuacion coloco el diseño de las tablas de PostgreSQL para poder reproducir el funcionamiento de la misma.

TABLA PAIS:

CREATE TABLE IF NOT EXISTS public."Pais"
(
    "ID" character varying(4) COLLATE pg_catalog."default" NOT NULL,
    "Nombre" character varying(20) COLLATE pg_catalog."default" NOT NULL,
    "Grupo" character varying(10) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Pais_pkey" PRIMARY KEY ("ID")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Pais"
    OWNER to postgres;


TABLA JUGADORES:

CREATE TABLE IF NOT EXISTS public."Jugadores"
(
    "IDpais" character varying COLLATE pg_catalog."default" NOT NULL,
    "Numero" integer NOT NULL,
    "Nombre" character varying(30) COLLATE pg_catalog."default" NOT NULL,
    "Posicion" character varying(20) COLLATE pg_catalog."default" NOT NULL,
    "FechaNacimiento" timestamp without time zone NOT NULL,
    "Debut" integer NOT NULL,
    "Peso" integer NOT NULL,
    "Altura" integer NOT NULL,
    "Club" character varying(20) COLLATE pg_catalog."default" NOT NULL,
    "Cantijuga" integer,
    CONSTRAINT "IDpais_key" PRIMARY KEY ("IDpais", "Numero"),
    CONSTRAINT "IDpais" FOREIGN KEY ("IDpais")
        REFERENCES public."Pais" ("ID") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT "Num_Fkey" FOREIGN KEY ("Numero")
        REFERENCES public."NumerosContr" ("Numero_fig") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Jugadores"
    OWNER to postgres;
    
    TABLA FIGURITASEXTRAS:
    
    CREATE TABLE IF NOT EXISTS public."FiguritasExtras"
(
    "IDfig" character varying(6) COLLATE pg_catalog."default" NOT NULL,
    "NumEX" integer NOT NULL,
    "Tipo" character varying(20) COLLATE pg_catalog."default" NOT NULL,
    "Descri" character varying(30) COLLATE pg_catalog."default",
    cantiextra integer,
    CONSTRAINT "FiguritasExtras_pkey" PRIMARY KEY ("IDfig")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."FiguritasExtras"
    OWNER to postgres;
    
    TABLA NUMEROSCONTR:
    
    CREATE TABLE IF NOT EXISTS public."NumerosContr"
(
    "Numero_fig" integer NOT NULL,
    CONSTRAINT "NumerosContr_pkey" PRIMARY KEY ("Numero_fig")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."NumerosContr"
    OWNER to postgres;
