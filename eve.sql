--
-- PostgreSQL database dump
--

-- Dumped from database version 11.3
-- Dumped by pg_dump version 11.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: eve; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA eve;


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: addresses; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.addresses (
    id integer NOT NULL,
    number integer NOT NULL,
    building integer,
    street character varying(255) NOT NULL,
    zip_code integer NOT NULL,
    id_city integer NOT NULL,
    id_user integer NOT NULL
);


--
-- Name: addresses_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.addresses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: addresses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.addresses_id_seq OWNED BY public.addresses.id;


--
-- Name: article_comments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.article_comments (
    id_user integer NOT NULL,
    id_articles integer NOT NULL,
    created_at date NOT NULL,
    content text NOT NULL
);


--
-- Name: articles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.articles (
    id integer NOT NULL,
    title character varying(45) NOT NULL,
    "created_At" date NOT NULL,
    id_user integer NOT NULL,
    content text NOT NULL,
    id_image integer NOT NULL
);


--
-- Name: articles_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.articles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: articles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.articles_id_seq OWNED BY public.articles.id;


--
-- Name: cities; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cities (
    id integer NOT NULL,
    name text NOT NULL,
    id_country integer NOT NULL
);


--
-- Name: cities_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cities_id_seq OWNED BY public.cities.id;


--
-- Name: countries; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.countries (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);


--
-- Name: country_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.country_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: country_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.country_id_seq OWNED BY public.countries.id;


--
-- Name: ecology_img; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.ecology_img (
    id integer NOT NULL,
    path character varying(255) NOT NULL,
    alt character varying(255) NOT NULL
);


--
-- Name: ecology_img_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.ecology_img_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: ecology_img_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.ecology_img_id_seq OWNED BY public.ecology_img.id;


--
-- Name: images; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.images (
    id integer NOT NULL,
    path character varying(255) NOT NULL,
    alt character varying(255) NOT NULL
);


--
-- Name: images_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.images_id_seq OWNED BY public.images.id;


--
-- Name: note_img; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.note_img (
    id integer NOT NULL,
    path character varying(255) NOT NULL,
    alt character varying(255) NOT NULL
);


--
-- Name: note_img_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.note_img_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: note_img_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.note_img_id_seq OWNED BY public.note_img.id;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.orders (
    id integer NOT NULL,
    id_user integer NOT NULL,
    id_address integer NOT NULL,
    status character varying(255) NOT NULL
);


--
-- Name: order_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: order_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.order_id_seq OWNED BY public.orders.id;


--
-- Name: product_category; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.product_category (
    id integer NOT NULL,
    name character varying(45) NOT NULL
);


--
-- Name: product_category_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.product_category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: product_category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.product_category_id_seq OWNED BY public.product_category.id;


--
-- Name: product_comments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.product_comments (
    product_id integer NOT NULL,
    id_user integer NOT NULL,
    id_note integer NOT NULL,
    comment text NOT NULL
);


--
-- Name: product_vendor; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.product_vendor (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);


--
-- Name: product_vendor_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.product_vendor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: product_vendor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.product_vendor_id_seq OWNED BY public.product_vendor.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.products (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    id_vendor integer NOT NULL,
    id_category integer NOT NULL,
    id_image integer NOT NULL,
    description text NOT NULL,
    quantity integer NOT NULL,
    utilisation character varying(255) NOT NULL,
    absorbtion character varying(255) NOT NULL,
    flow character varying(255) NOT NULL,
    volume character varying(255) NOT NULL,
    composition character varying(255) NOT NULL,
    made_in character varying(255) NOT NULL,
    lifetime character varying(255) NOT NULL,
    sealing integer NOT NULL,
    ecology integer NOT NULL,
    price double precision NOT NULL
);


--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: roles; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(45) NOT NULL
);


--
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;


--
-- Name: sealing_img; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sealing_img (
    id integer NOT NULL,
    path character varying(255) NOT NULL,
    alt character varying(255) NOT NULL
);


--
-- Name: sealing_img_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sealing_img_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sealing_img_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sealing_img_id_seq OWNED BY public.sealing_img.id;


--
-- Name: subscriptions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.subscriptions (
    id integer NOT NULL,
    id_order integer NOT NULL,
    activation_date date NOT NULL,
    "interval" integer NOT NULL,
    duration date
);


--
-- Name: subscriptions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.subscriptions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: subscriptions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.subscriptions_id_seq OWNED BY public.subscriptions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    lastname character varying(45) NOT NULL,
    firstname text NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    phone character varying(17) NOT NULL,
    id_role integer NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: addresses id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.addresses ALTER COLUMN id SET DEFAULT nextval('public.addresses_id_seq'::regclass);


--
-- Name: articles id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.articles ALTER COLUMN id SET DEFAULT nextval('public.articles_id_seq'::regclass);


--
-- Name: cities id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cities ALTER COLUMN id SET DEFAULT nextval('public.cities_id_seq'::regclass);


--
-- Name: countries id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.countries ALTER COLUMN id SET DEFAULT nextval('public.country_id_seq'::regclass);


--
-- Name: ecology_img id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ecology_img ALTER COLUMN id SET DEFAULT nextval('public.ecology_img_id_seq'::regclass);


--
-- Name: images id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.images ALTER COLUMN id SET DEFAULT nextval('public.images_id_seq'::regclass);


--
-- Name: note_img id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.note_img ALTER COLUMN id SET DEFAULT nextval('public.note_img_id_seq'::regclass);


--
-- Name: orders id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders ALTER COLUMN id SET DEFAULT nextval('public.order_id_seq'::regclass);


--
-- Name: product_category id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.product_category ALTER COLUMN id SET DEFAULT nextval('public.product_category_id_seq'::regclass);


--
-- Name: product_vendor id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.product_vendor ALTER COLUMN id SET DEFAULT nextval('public.product_vendor_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: roles id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);


--
-- Name: sealing_img id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sealing_img ALTER COLUMN id SET DEFAULT nextval('public.sealing_img_id_seq'::regclass);


--
-- Name: subscriptions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subscriptions ALTER COLUMN id SET DEFAULT nextval('public.subscriptions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: addresses; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.addresses (id, number, building, street, zip_code, id_city, id_user) FROM stdin;
\.


--
-- Data for Name: article_comments; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.article_comments (id_user, id_articles, created_at, content) FROM stdin;
\.


--
-- Data for Name: articles; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.articles (id, title, "created_At", id_user, content, id_image) FROM stdin;
\.


--
-- Data for Name: cities; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.cities (id, name, id_country) FROM stdin;
\.


--
-- Data for Name: countries; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.countries (id, name) FROM stdin;
\.


--
-- Data for Name: ecology_img; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.ecology_img (id, path, alt) FROM stdin;
\.


--
-- Data for Name: images; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.images (id, path, alt) FROM stdin;
\.


--
-- Data for Name: note_img; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.note_img (id, path, alt) FROM stdin;
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.orders (id, id_user, id_address, status) FROM stdin;
\.


--
-- Data for Name: product_category; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.product_category (id, name) FROM stdin;
\.


--
-- Data for Name: product_comments; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.product_comments (product_id, id_user, id_note, comment) FROM stdin;
\.


--
-- Data for Name: product_vendor; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.product_vendor (id, name) FROM stdin;
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.products (id, name, id_vendor, id_category, id_image, description, quantity, utilisation, absorbtion, flow, volume, composition, made_in, lifetime, sealing, ecology, price) FROM stdin;
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.roles (id, name) FROM stdin;
1	member
2	subscriber
3	moderator
\.


--
-- Data for Name: sealing_img; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.sealing_img (id, path, alt) FROM stdin;
\.


--
-- Data for Name: subscriptions; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.subscriptions (id, id_order, activation_date, "interval", duration) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.users (id, lastname, firstname, email, password, phone, id_role) FROM stdin;
2	Dujardin	Eve	eve@eve.fr	sha1$2e170af7$1$32610713e48ff8e7007f5aa74edcdf020267fe81	+33 6 66 66 66 66	2
1	Decobert	Axel	axel@eve.fr	sha1$99298c0a$1$be892341a6a6b4933347b9349cb793a52cc0e951		3
\.


--
-- Name: addresses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.addresses_id_seq', 1, false);


--
-- Name: articles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.articles_id_seq', 1, false);


--
-- Name: cities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.cities_id_seq', 1, false);


--
-- Name: country_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.country_id_seq', 1, false);


--
-- Name: ecology_img_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.ecology_img_id_seq', 1, false);


--
-- Name: images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.images_id_seq', 1, false);


--
-- Name: note_img_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.note_img_id_seq', 1, false);


--
-- Name: order_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.order_id_seq', 1, false);


--
-- Name: product_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.product_category_id_seq', 1, false);


--
-- Name: product_vendor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.product_vendor_id_seq', 1, false);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.products_id_seq', 1, true);


--
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.roles_id_seq', 1, false);


--
-- Name: sealing_img_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sealing_img_id_seq', 1, false);


--
-- Name: subscriptions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.subscriptions_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 2, true);


--
-- Name: addresses addresses_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT addresses_pkey PRIMARY KEY (id);


--
-- Name: articles articles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.articles
    ADD CONSTRAINT articles_pkey PRIMARY KEY (id);


--
-- Name: cities cities_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT cities_pkey PRIMARY KEY (id);


--
-- Name: countries country_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.countries
    ADD CONSTRAINT country_pkey PRIMARY KEY (id);


--
-- Name: ecology_img ecology_img_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.ecology_img
    ADD CONSTRAINT ecology_img_pkey PRIMARY KEY (id);


--
-- Name: images images_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);


--
-- Name: note_img note_img_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.note_img
    ADD CONSTRAINT note_img_pkey PRIMARY KEY (id);


--
-- Name: orders order_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT order_pkey PRIMARY KEY (id);


--
-- Name: product_category product_category_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.product_category
    ADD CONSTRAINT product_category_pkey PRIMARY KEY (id);


--
-- Name: product_vendor product_vendor_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.product_vendor
    ADD CONSTRAINT product_vendor_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- Name: sealing_img sealing_img_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sealing_img
    ADD CONSTRAINT sealing_img_pkey PRIMARY KEY (id);


--
-- Name: subscriptions subscriptions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subscriptions
    ADD CONSTRAINT subscriptions_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: article_comments article_comments_id_articles_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.article_comments
    ADD CONSTRAINT article_comments_id_articles_fkey FOREIGN KEY (id_articles) REFERENCES public.articles(id);


--
-- Name: article_comments article_comments_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.article_comments
    ADD CONSTRAINT article_comments_id_user_fkey FOREIGN KEY (id_user) REFERENCES public.users(id);


--
-- Name: articles articles_id_image_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.articles
    ADD CONSTRAINT articles_id_image_fkey FOREIGN KEY (id_image) REFERENCES public.images(id);


--
-- Name: articles articles_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.articles
    ADD CONSTRAINT articles_id_user_fkey FOREIGN KEY (id_user) REFERENCES public.users(id);


--
-- Name: addresses id_city; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT id_city FOREIGN KEY (id_city) REFERENCES public.cities(id);


--
-- Name: cities id_country; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT id_country FOREIGN KEY (id_country) REFERENCES public.countries(id);


--
-- Name: addresses id_user; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT id_user FOREIGN KEY (id_user) REFERENCES public.users(id);


--
-- Name: orders id_user; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT id_user FOREIGN KEY (id_user) REFERENCES public.users(id);


--
-- Name: orders order_id_address_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT order_id_address_fkey FOREIGN KEY (id_address) REFERENCES public.addresses(id);


--
-- Name: product_comments product_comments_id_note_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.product_comments
    ADD CONSTRAINT product_comments_id_note_fkey FOREIGN KEY (id_note) REFERENCES public.note_img(id);


--
-- Name: product_comments product_comments_id_user_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.product_comments
    ADD CONSTRAINT product_comments_id_user_fkey FOREIGN KEY (id_user) REFERENCES public.users(id);


--
-- Name: product_comments product_comments_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.product_comments
    ADD CONSTRAINT product_comments_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id);


--
-- Name: products products_category_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_category_id_fkey FOREIGN KEY (id_category) REFERENCES public.product_category(id);


--
-- Name: products products_ecology_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_ecology_fkey FOREIGN KEY (ecology) REFERENCES public.ecology_img(id);


--
-- Name: products products_image_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_image_id_fkey FOREIGN KEY (id_image) REFERENCES public.images(id);


--
-- Name: products products_sealing_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_sealing_fkey FOREIGN KEY (sealing) REFERENCES public.sealing_img(id);


--
-- Name: products products_vendor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_vendor_id_fkey FOREIGN KEY (id_vendor) REFERENCES public.product_vendor(id);


--
-- Name: subscriptions subscriptions_order_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.subscriptions
    ADD CONSTRAINT subscriptions_order_id_fkey FOREIGN KEY (id_order) REFERENCES public.orders(id);


--
-- Name: users users_id_role_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_id_role_fkey FOREIGN KEY (id_role) REFERENCES public.roles(id);


--
-- PostgreSQL database dump complete
--

