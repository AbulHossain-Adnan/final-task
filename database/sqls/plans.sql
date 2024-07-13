insert into public.plans (id, type, name, price, capped_amount, terms, trial_days, test, on_install, created_at, updated_at, interval)
values  (1, 'RECURRING', 'Free', 0.00, 0.01, 'FREE plan, no charge', null, true, true, '2024-03-14 10:07:00', '2024-03-14 10:07:00', 'EVERY_30_DAYS'),
        (2, 'RECURRING', 'Premium', 2.99, null, null, null, true, false, '2024-03-14 10:07:00', '2024-03-14 10:07:00', 'EVERY_30_DAYS'),
        (3, 'RECURRING', 'Free', 0.00, 0.01, 'FREE plan, no charge', null, true, true, '2024-03-14 10:07:54', '2024-03-14 10:07:54', 'EVERY_30_DAYS'),
        (4, 'RECURRING', 'Premium', 2.99, null, null, null, true, false, '2024-03-14 10:07:54', '2024-03-14 10:07:54', 'EVERY_30_DAYS');