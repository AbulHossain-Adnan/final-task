--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2 (Homebrew)
-- Dumped by pg_dump version 16.2 (Homebrew)

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: admins; Type: TABLE; Schema: public; Owner: xgenious
--

CREATE TABLE public.admins (
    id bigint NOT NULL,
    name character varying(255) NOT NULL,
    username character varying(255) NOT NULL,
    email_verified smallint DEFAULT '0'::smallint NOT NULL,
    email_verify_token character varying(255),
    mobile character varying(20),
    email character varying(255) NOT NULL,
    image bigint,
    email_verified_at timestamp(0) without time zone,
    password character varying(255) NOT NULL,
    remember_token character varying(100),
    created_at timestamp(0) without time zone,
    updated_at timestamp(0) without time zone
);


ALTER TABLE public.admins OWNER TO xgenious;

--
-- Name: admins_id_seq; Type: SEQUENCE; Schema: public; Owner: xgenious
--

CREATE SEQUENCE public.admins_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.admins_id_seq OWNER TO xgenious;

--
-- Name: admins_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: xgenious
--

ALTER SEQUENCE public.admins_id_seq OWNED BY public.admins.id;


--
-- Name: admins id; Type: DEFAULT; Schema: public; Owner: xgenious
--

ALTER TABLE ONLY public.admins ALTER COLUMN id SET DEFAULT nextval('public.admins_id_seq'::regclass);


--
-- Data for Name: admins; Type: TABLE DATA; Schema: public; Owner: xgenious
--

COPY public.admins (id, name, username, email_verified, email_verify_token, mobile, email, image, email_verified_at, password, remember_token, created_at, updated_at) FROM stdin;
11	Mona Fulton	zubikuv	0	\N	Amet non non perspi	ryvekuqe@mailinator.com	\N	\N	$2y$10$g.ycqqGxGDGoVLWcJGaPluq.NtMWApAN/qCYdA6Ks.lcKfP17et7i	\N	2024-05-08 05:17:52	2024-05-08 05:17:52
12	Kaye Day	tavuciky	0	\N	Cumque dolor veritat	qelopax@mailinator.com	\N	\N	$2y$10$Rv2AR0bT5ShF5Izpl2B5fuGf2aSaApw0QyaxaOhihTix9dtT4ChK6	\N	2024-04-01 03:55:55	2024-04-01 04:21:51
17	admin	admin	0	\N	01998100737	admin@gmail.com	\N	\N	$2y$10$rSAG.KGi6sJAScFqWbGuGeLLDIPK9cHcqW60sNJVBjMIGlFBMMW.K	WEna05TIRkIlffpCVgNzcOz9bkVIYnGD50Vz09FSYdgd0QqqA7Io4Kvvhjve	2024-03-31 04:54:57	2024-03-31 04:54:57
\.


--
-- Name: admins_id_seq; Type: SEQUENCE SET; Schema: public; Owner: xgenious
--

SELECT pg_catalog.setval('public.admins_id_seq', 67, true);


--
-- Name: admins admins_email_unique; Type: CONSTRAINT; Schema: public; Owner: xgenious
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admins_email_unique UNIQUE (email);


--
-- Name: admins admins_pkey; Type: CONSTRAINT; Schema: public; Owner: xgenious
--

ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admins_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

