-- Fase 2: substitui src/lib/data.ts. Leitura pública, escrita só para admins autenticados.

create table public.packages (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  destination text not null,
  country text not null,
  category text not null check (category in ('nacional', 'internacional')),
  tags text[] not null default '{}',
  nights int not null check (nights > 0),
  departure_from text not null,
  hook text not null,
  summary text not null,
  image_path text not null,
  image_alt text not null,
  includes text[] not null default '{}',
  excludes text[] not null default '{}',
  itinerary jsonb not null default '[]', -- [{ day, title, text }]
  max_installments int not null default 10,
  published boolean not null default false,
  position int not null default 0,
  updated_at timestamptz not null default now()
);

create table public.departures (
  id uuid primary key default gen_random_uuid(),
  package_id uuid not null references public.packages (id) on delete cascade,
  date date not null,
  price_per_person numeric(10, 2) not null check (price_per_person > 0),
  sold_out boolean not null default false,
  unique (package_id, date)
);

create table public.tours (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  country text not null check (country in ('Brasil', 'Argentina', 'Paraguai')),
  duration text not null,
  price numeric(10, 2) not null check (price > 0),
  summary text not null,
  includes text[] not null default '{}',
  note text,
  image_path text not null,
  image_alt text not null,
  published boolean not null default false,
  position int not null default 0,
  updated_at timestamptz not null default now()
);

create table public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade
);

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.admins where user_id = auth.uid());
$$;

alter table public.packages enable row level security;
alter table public.departures enable row level security;
alter table public.tours enable row level security;
alter table public.admins enable row level security;

create policy "public read packages" on public.packages for select using (published or public.is_admin());
create policy "admin write packages" on public.packages for all using (public.is_admin()) with check (public.is_admin());

create policy "public read departures" on public.departures for select using (
  exists (select 1 from public.packages p where p.id = package_id and (p.published or public.is_admin()))
);
create policy "admin write departures" on public.departures for all using (public.is_admin()) with check (public.is_admin());

create policy "public read tours" on public.tours for select using (published or public.is_admin());
create policy "admin write tours" on public.tours for all using (public.is_admin()) with check (public.is_admin());

create policy "admin read admins" on public.admins for select using (public.is_admin());

create index departures_package_date on public.departures (package_id, date);
