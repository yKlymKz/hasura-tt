SET check_function_bodies = false;
CREATE TABLE public.tiles (
    tail text NOT NULL,
    json_id integer NOT NULL
);
ALTER TABLE ONLY public.tiles
    ADD CONSTRAINT tiles_pkey PRIMARY KEY (tail);