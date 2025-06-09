USE [C:\HOME_WORK\WEB_HOME_WORK\NEW_SITE1\WEB-HOMEWORK\NEW_SITE\APP_DATA\USERSDB.MDF]
GO

/****** Object: Table [dbo].[usersTBL] Script Date: 6/8/2025 5:41:17 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

DROP TABLE [dbo].[usersTBL];


GO
CREATE TABLE [dbo].[usersTBL] (
    [Id]         INT           IDENTITY (1, 1) NOT NULL,
    [first_name] NVARCHAR (50) NOT NULL,
    [last_name]  NVARCHAR (50) NOT NULL,
    [prefix]     NVARCHAR (3)  NOT NULL,
    [phone]      NVARCHAR (50) NOT NULL,
    [birth_year] INT           NOT NULL,
    [gender]     NVARCHAR (50) NOT NULL,
    [email]      NVARCHAR (50) NOT NULL,
    [password]   NVARCHAR (50) NOT NULL
);


