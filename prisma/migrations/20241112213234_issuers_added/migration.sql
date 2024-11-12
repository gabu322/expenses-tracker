BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Card] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [number] NVARCHAR(1000),
    [expiration] NVARCHAR(1000),
    [cvv] NVARCHAR(1000),
    [description] NVARCHAR(1000),
    [issuerId] INT NOT NULL,
    [acceptsDebit] BIT NOT NULL CONSTRAINT [Card_acceptsDebit_df] DEFAULT 0,
    [acceptsCredit] BIT NOT NULL CONSTRAINT [Card_acceptsCredit_df] DEFAULT 0,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Card_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Card_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Card_number_key] UNIQUE NONCLUSTERED ([number])
);

-- CreateTable
CREATE TABLE [dbo].[CreditCard] (
    [id] INT NOT NULL IDENTITY(1,1),
    [creditLimit] FLOAT(53) NOT NULL,
    [currentCredit] FLOAT(53) NOT NULL CONSTRAINT [CreditCard_currentCredit_df] DEFAULT 0.0,
    [cardId] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [CreditCard_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [CreditCard_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [CreditCard_cardId_key] UNIQUE NONCLUSTERED ([cardId])
);

-- CreateTable
CREATE TABLE [dbo].[DebitCard] (
    [id] INT NOT NULL IDENTITY(1,1),
    [balance] FLOAT(53) NOT NULL CONSTRAINT [DebitCard_balance_df] DEFAULT 0.0,
    [cardId] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [DebitCard_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [DebitCard_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [DebitCard_cardId_key] UNIQUE NONCLUSTERED ([cardId])
);

-- CreateTable
CREATE TABLE [dbo].[Issuer] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [color] NVARCHAR(1000) NOT NULL,
    [icon] NVARCHAR(1000),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Issuer_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Issuer_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Transaction] (
    [id] INT NOT NULL IDENTITY(1,1),
    [isEarning] BIT NOT NULL,
    [amount] FLOAT(53) NOT NULL,
    [date] DATETIME2 NOT NULL,
    [method] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000),
    [cardId] INT NOT NULL,
    [userId] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Transaction_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Transaction_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [cpf] NVARCHAR(1000),
    [phone] NVARCHAR(1000),
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [User_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [User_email_key] UNIQUE NONCLUSTERED ([email]),
    CONSTRAINT [User_cpf_key] UNIQUE NONCLUSTERED ([cpf])
);

-- AddForeignKey
ALTER TABLE [dbo].[Card] ADD CONSTRAINT [Card_issuerId_fkey] FOREIGN KEY ([issuerId]) REFERENCES [dbo].[Issuer]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[CreditCard] ADD CONSTRAINT [CreditCard_cardId_fkey] FOREIGN KEY ([cardId]) REFERENCES [dbo].[Card]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[DebitCard] ADD CONSTRAINT [DebitCard_cardId_fkey] FOREIGN KEY ([cardId]) REFERENCES [dbo].[Card]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Transaction] ADD CONSTRAINT [Transaction_cardId_fkey] FOREIGN KEY ([cardId]) REFERENCES [dbo].[Card]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[Transaction] ADD CONSTRAINT [Transaction_userId_fkey] FOREIGN KEY ([userId]) REFERENCES [dbo].[User]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
