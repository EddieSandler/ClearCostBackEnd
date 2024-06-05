CREATE TABLE public.users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    insurance_company VARCHAR(255),
    copayment NUMERIC(10,2) DEFAULT 0,
    coinsurance NUMERIC(5,2) DEFAULT 0,
    deductible NUMERIC(10,2) DEFAULT 0,
    isAdmin BOOLEAN DEFAULT false NOT NULL,
    saved_comparisons JSONB,
    CONSTRAINT users_coinsurance_check CHECK (coinsurance >= 0 AND coinsurance <= 100),
    CONSTRAINT users_copayment_check CHECK (copayment >= 0),
    CONSTRAINT users_deductible_check CHECK (deductible >= 0)
);
