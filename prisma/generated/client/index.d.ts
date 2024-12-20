
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Card
 * 
 */
export type Card = $Result.DefaultSelection<Prisma.$CardPayload>
/**
 * Model CreditCard
 * 
 */
export type CreditCard = $Result.DefaultSelection<Prisma.$CreditCardPayload>
/**
 * Model DebitCard
 * 
 */
export type DebitCard = $Result.DefaultSelection<Prisma.$DebitCardPayload>
/**
 * Model Issuer
 * 
 */
export type Issuer = $Result.DefaultSelection<Prisma.$IssuerPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CardType: {
  CREDIT: 'CREDIT',
  DEBIT: 'DEBIT',
  BOTH: 'BOTH',
  NONE: 'NONE'
};

export type CardType = (typeof CardType)[keyof typeof CardType]


export const TransactionType: {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const TransactionMethod: {
  PIX: 'PIX',
  DEBIT: 'DEBIT',
  CREDIT: 'CREDIT',
  CASH: 'CASH'
};

export type TransactionMethod = (typeof TransactionMethod)[keyof typeof TransactionMethod]

}

export type CardType = $Enums.CardType

export const CardType: typeof $Enums.CardType

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type TransactionMethod = $Enums.TransactionMethod

export const TransactionMethod: typeof $Enums.TransactionMethod

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cards
 * const cards = await prisma.card.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cards
   * const cards = await prisma.card.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.card`: Exposes CRUD operations for the **Card** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.card.findMany()
    * ```
    */
  get card(): Prisma.CardDelegate<ExtArgs>;

  /**
   * `prisma.creditCard`: Exposes CRUD operations for the **CreditCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditCards
    * const creditCards = await prisma.creditCard.findMany()
    * ```
    */
  get creditCard(): Prisma.CreditCardDelegate<ExtArgs>;

  /**
   * `prisma.debitCard`: Exposes CRUD operations for the **DebitCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DebitCards
    * const debitCards = await prisma.debitCard.findMany()
    * ```
    */
  get debitCard(): Prisma.DebitCardDelegate<ExtArgs>;

  /**
   * `prisma.issuer`: Exposes CRUD operations for the **Issuer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Issuers
    * const issuers = await prisma.issuer.findMany()
    * ```
    */
  get issuer(): Prisma.IssuerDelegate<ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.21.1
   * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Card: 'Card',
    CreditCard: 'CreditCard',
    DebitCard: 'DebitCard',
    Issuer: 'Issuer',
    Transaction: 'Transaction',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "card" | "creditCard" | "debitCard" | "issuer" | "transaction" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Card: {
        payload: Prisma.$CardPayload<ExtArgs>
        fields: Prisma.CardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findFirst: {
            args: Prisma.CardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findMany: {
            args: Prisma.CardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          create: {
            args: Prisma.CardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          createMany: {
            args: Prisma.CardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          delete: {
            args: Prisma.CardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          update: {
            args: Prisma.CardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          deleteMany: {
            args: Prisma.CardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          aggregate: {
            args: Prisma.CardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCard>
          }
          groupBy: {
            args: Prisma.CardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardCountArgs<ExtArgs>
            result: $Utils.Optional<CardCountAggregateOutputType> | number
          }
        }
      }
      CreditCard: {
        payload: Prisma.$CreditCardPayload<ExtArgs>
        fields: Prisma.CreditCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          findFirst: {
            args: Prisma.CreditCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          findMany: {
            args: Prisma.CreditCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>[]
          }
          create: {
            args: Prisma.CreditCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          createMany: {
            args: Prisma.CreditCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>[]
          }
          delete: {
            args: Prisma.CreditCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          update: {
            args: Prisma.CreditCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          deleteMany: {
            args: Prisma.CreditCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CreditCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditCardPayload>
          }
          aggregate: {
            args: Prisma.CreditCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditCard>
          }
          groupBy: {
            args: Prisma.CreditCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditCardCountArgs<ExtArgs>
            result: $Utils.Optional<CreditCardCountAggregateOutputType> | number
          }
        }
      }
      DebitCard: {
        payload: Prisma.$DebitCardPayload<ExtArgs>
        fields: Prisma.DebitCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DebitCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DebitCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitCardPayload>
          }
          findFirst: {
            args: Prisma.DebitCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DebitCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitCardPayload>
          }
          findMany: {
            args: Prisma.DebitCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitCardPayload>[]
          }
          create: {
            args: Prisma.DebitCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitCardPayload>
          }
          createMany: {
            args: Prisma.DebitCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DebitCardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitCardPayload>[]
          }
          delete: {
            args: Prisma.DebitCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitCardPayload>
          }
          update: {
            args: Prisma.DebitCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitCardPayload>
          }
          deleteMany: {
            args: Prisma.DebitCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DebitCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DebitCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DebitCardPayload>
          }
          aggregate: {
            args: Prisma.DebitCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDebitCard>
          }
          groupBy: {
            args: Prisma.DebitCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<DebitCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.DebitCardCountArgs<ExtArgs>
            result: $Utils.Optional<DebitCardCountAggregateOutputType> | number
          }
        }
      }
      Issuer: {
        payload: Prisma.$IssuerPayload<ExtArgs>
        fields: Prisma.IssuerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IssuerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IssuerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuerPayload>
          }
          findFirst: {
            args: Prisma.IssuerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IssuerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuerPayload>
          }
          findMany: {
            args: Prisma.IssuerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuerPayload>[]
          }
          create: {
            args: Prisma.IssuerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuerPayload>
          }
          createMany: {
            args: Prisma.IssuerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IssuerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuerPayload>[]
          }
          delete: {
            args: Prisma.IssuerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuerPayload>
          }
          update: {
            args: Prisma.IssuerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuerPayload>
          }
          deleteMany: {
            args: Prisma.IssuerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IssuerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IssuerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuerPayload>
          }
          aggregate: {
            args: Prisma.IssuerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIssuer>
          }
          groupBy: {
            args: Prisma.IssuerGroupByArgs<ExtArgs>
            result: $Utils.Optional<IssuerGroupByOutputType>[]
          }
          count: {
            args: Prisma.IssuerCountArgs<ExtArgs>
            result: $Utils.Optional<IssuerCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CardCountOutputType
   */

  export type CardCountOutputType = {
    Transaction: number
  }

  export type CardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transaction?: boolean | CardCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardCountOutputType
     */
    select?: CardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type IssuerCountOutputType
   */

  export type IssuerCountOutputType = {
    Card: number
  }

  export type IssuerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Card?: boolean | IssuerCountOutputTypeCountCardArgs
  }

  // Custom InputTypes
  /**
   * IssuerCountOutputType without action
   */
  export type IssuerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssuerCountOutputType
     */
    select?: IssuerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IssuerCountOutputType without action
   */
  export type IssuerCountOutputTypeCountCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Transaction: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transaction?: boolean | UserCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Card
   */

  export type AggregateCard = {
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  export type CardAvgAggregateOutputType = {
    id: number | null
    issuerId: number | null
  }

  export type CardSumAggregateOutputType = {
    id: number | null
    issuerId: number | null
  }

  export type CardMinAggregateOutputType = {
    id: number | null
    name: string | null
    number: string | null
    expiration: string | null
    cvv: string | null
    nickname: string | null
    issuerId: number | null
    cardType: $Enums.CardType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CardMaxAggregateOutputType = {
    id: number | null
    name: string | null
    number: string | null
    expiration: string | null
    cvv: string | null
    nickname: string | null
    issuerId: number | null
    cardType: $Enums.CardType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CardCountAggregateOutputType = {
    id: number
    name: number
    number: number
    expiration: number
    cvv: number
    nickname: number
    issuerId: number
    cardType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CardAvgAggregateInputType = {
    id?: true
    issuerId?: true
  }

  export type CardSumAggregateInputType = {
    id?: true
    issuerId?: true
  }

  export type CardMinAggregateInputType = {
    id?: true
    name?: true
    number?: true
    expiration?: true
    cvv?: true
    nickname?: true
    issuerId?: true
    cardType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CardMaxAggregateInputType = {
    id?: true
    name?: true
    number?: true
    expiration?: true
    cvv?: true
    nickname?: true
    issuerId?: true
    cardType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CardCountAggregateInputType = {
    id?: true
    name?: true
    number?: true
    expiration?: true
    cvv?: true
    nickname?: true
    issuerId?: true
    cardType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Card to aggregate.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    _count?: true | CardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardMaxAggregateInputType
  }

  export type GetCardAggregateType<T extends CardAggregateArgs> = {
        [P in keyof T & keyof AggregateCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard[P]>
      : GetScalarType<T[P], AggregateCard[P]>
  }




  export type CardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
    orderBy?: CardOrderByWithAggregationInput | CardOrderByWithAggregationInput[]
    by: CardScalarFieldEnum[] | CardScalarFieldEnum
    having?: CardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardCountAggregateInputType | true
    _avg?: CardAvgAggregateInputType
    _sum?: CardSumAggregateInputType
    _min?: CardMinAggregateInputType
    _max?: CardMaxAggregateInputType
  }

  export type CardGroupByOutputType = {
    id: number
    name: string
    number: string | null
    expiration: string | null
    cvv: string | null
    nickname: string | null
    issuerId: number
    cardType: $Enums.CardType
    createdAt: Date
    updatedAt: Date
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  type GetCardGroupByPayload<T extends CardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardGroupByOutputType[P]>
            : GetScalarType<T[P], CardGroupByOutputType[P]>
        }
      >
    >


  export type CardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    expiration?: boolean
    cvv?: boolean
    nickname?: boolean
    issuerId?: boolean
    cardType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Issuer?: boolean | IssuerDefaultArgs<ExtArgs>
    CreditCard?: boolean | Card$CreditCardArgs<ExtArgs>
    DebitCard?: boolean | Card$DebitCardArgs<ExtArgs>
    Transaction?: boolean | Card$TransactionArgs<ExtArgs>
    _count?: boolean | CardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    expiration?: boolean
    cvv?: boolean
    nickname?: boolean
    issuerId?: boolean
    cardType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Issuer?: boolean | IssuerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>

  export type CardSelectScalar = {
    id?: boolean
    name?: boolean
    number?: boolean
    expiration?: boolean
    cvv?: boolean
    nickname?: boolean
    issuerId?: boolean
    cardType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Issuer?: boolean | IssuerDefaultArgs<ExtArgs>
    CreditCard?: boolean | Card$CreditCardArgs<ExtArgs>
    DebitCard?: boolean | Card$DebitCardArgs<ExtArgs>
    Transaction?: boolean | Card$TransactionArgs<ExtArgs>
    _count?: boolean | CardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Issuer?: boolean | IssuerDefaultArgs<ExtArgs>
  }

  export type $CardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Card"
    objects: {
      Issuer: Prisma.$IssuerPayload<ExtArgs>
      CreditCard: Prisma.$CreditCardPayload<ExtArgs> | null
      DebitCard: Prisma.$DebitCardPayload<ExtArgs> | null
      Transaction: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      number: string | null
      expiration: string | null
      cvv: string | null
      nickname: string | null
      issuerId: number
      cardType: $Enums.CardType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["card"]>
    composites: {}
  }

  type CardGetPayload<S extends boolean | null | undefined | CardDefaultArgs> = $Result.GetResult<Prisma.$CardPayload, S>

  type CardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CardFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CardCountAggregateInputType | true
    }

  export interface CardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Card'], meta: { name: 'Card' } }
    /**
     * Find zero or one Card that matches the filter.
     * @param {CardFindUniqueArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardFindUniqueArgs>(args: SelectSubset<T, CardFindUniqueArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Card that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CardFindUniqueOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardFindUniqueOrThrowArgs>(args: SelectSubset<T, CardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardFindFirstArgs>(args?: SelectSubset<T, CardFindFirstArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardFindFirstOrThrowArgs>(args?: SelectSubset<T, CardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.card.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.card.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardWithIdOnly = await prisma.card.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardFindManyArgs>(args?: SelectSubset<T, CardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Card.
     * @param {CardCreateArgs} args - Arguments to create a Card.
     * @example
     * // Create one Card
     * const Card = await prisma.card.create({
     *   data: {
     *     // ... data to create a Card
     *   }
     * })
     * 
     */
    create<T extends CardCreateArgs>(args: SelectSubset<T, CardCreateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cards.
     * @param {CardCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardCreateManyArgs>(args?: SelectSubset<T, CardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cards and returns the data saved in the database.
     * @param {CardCreateManyAndReturnArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cards and only return the `id`
     * const cardWithIdOnly = await prisma.card.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CardCreateManyAndReturnArgs>(args?: SelectSubset<T, CardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Card.
     * @param {CardDeleteArgs} args - Arguments to delete one Card.
     * @example
     * // Delete one Card
     * const Card = await prisma.card.delete({
     *   where: {
     *     // ... filter to delete one Card
     *   }
     * })
     * 
     */
    delete<T extends CardDeleteArgs>(args: SelectSubset<T, CardDeleteArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Card.
     * @param {CardUpdateArgs} args - Arguments to update one Card.
     * @example
     * // Update one Card
     * const card = await prisma.card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardUpdateArgs>(args: SelectSubset<T, CardUpdateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cards.
     * @param {CardDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardDeleteManyArgs>(args?: SelectSubset<T, CardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardUpdateManyArgs>(args: SelectSubset<T, CardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Card.
     * @param {CardUpsertArgs} args - Arguments to update or create a Card.
     * @example
     * // Update or create a Card
     * const card = await prisma.card.upsert({
     *   create: {
     *     // ... data to create a Card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card we want to update
     *   }
     * })
     */
    upsert<T extends CardUpsertArgs>(args: SelectSubset<T, CardUpsertArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.card.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardCountArgs>(
      args?: Subset<T, CardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardAggregateArgs>(args: Subset<T, CardAggregateArgs>): Prisma.PrismaPromise<GetCardAggregateType<T>>

    /**
     * Group by Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardGroupByArgs['orderBy'] }
        : { orderBy?: CardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Card model
   */
  readonly fields: CardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Issuer<T extends IssuerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IssuerDefaultArgs<ExtArgs>>): Prisma__IssuerClient<$Result.GetResult<Prisma.$IssuerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    CreditCard<T extends Card$CreditCardArgs<ExtArgs> = {}>(args?: Subset<T, Card$CreditCardArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    DebitCard<T extends Card$DebitCardArgs<ExtArgs> = {}>(args?: Subset<T, Card$DebitCardArgs<ExtArgs>>): Prisma__DebitCardClient<$Result.GetResult<Prisma.$DebitCardPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Transaction<T extends Card$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, Card$TransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Card model
   */ 
  interface CardFieldRefs {
    readonly id: FieldRef<"Card", 'Int'>
    readonly name: FieldRef<"Card", 'String'>
    readonly number: FieldRef<"Card", 'String'>
    readonly expiration: FieldRef<"Card", 'String'>
    readonly cvv: FieldRef<"Card", 'String'>
    readonly nickname: FieldRef<"Card", 'String'>
    readonly issuerId: FieldRef<"Card", 'Int'>
    readonly cardType: FieldRef<"Card", 'CardType'>
    readonly createdAt: FieldRef<"Card", 'DateTime'>
    readonly updatedAt: FieldRef<"Card", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Card findUnique
   */
  export type CardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findUniqueOrThrow
   */
  export type CardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findFirst
   */
  export type CardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findFirstOrThrow
   */
  export type CardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findMany
   */
  export type CardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card create
   */
  export type CardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to create a Card.
     */
    data: XOR<CardCreateInput, CardUncheckedCreateInput>
  }

  /**
   * Card createMany
   */
  export type CardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Card createManyAndReturn
   */
  export type CardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Card update
   */
  export type CardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to update a Card.
     */
    data: XOR<CardUpdateInput, CardUncheckedUpdateInput>
    /**
     * Choose, which Card to update.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card updateMany
   */
  export type CardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
  }

  /**
   * Card upsert
   */
  export type CardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The filter to search for the Card to update in case it exists.
     */
    where: CardWhereUniqueInput
    /**
     * In case the Card found by the `where` argument doesn't exist, create a new Card with this data.
     */
    create: XOR<CardCreateInput, CardUncheckedCreateInput>
    /**
     * In case the Card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardUpdateInput, CardUncheckedUpdateInput>
  }

  /**
   * Card delete
   */
  export type CardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter which Card to delete.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card deleteMany
   */
  export type CardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to delete
     */
    where?: CardWhereInput
  }

  /**
   * Card.CreditCard
   */
  export type Card$CreditCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    where?: CreditCardWhereInput
  }

  /**
   * Card.DebitCard
   */
  export type Card$DebitCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardInclude<ExtArgs> | null
    where?: DebitCardWhereInput
  }

  /**
   * Card.Transaction
   */
  export type Card$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Card without action
   */
  export type CardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
  }


  /**
   * Model CreditCard
   */

  export type AggregateCreditCard = {
    _count: CreditCardCountAggregateOutputType | null
    _avg: CreditCardAvgAggregateOutputType | null
    _sum: CreditCardSumAggregateOutputType | null
    _min: CreditCardMinAggregateOutputType | null
    _max: CreditCardMaxAggregateOutputType | null
  }

  export type CreditCardAvgAggregateOutputType = {
    id: number | null
    creditLimit: number | null
    currentCredit: number | null
    cardId: number | null
  }

  export type CreditCardSumAggregateOutputType = {
    id: number | null
    creditLimit: number | null
    currentCredit: number | null
    cardId: number | null
  }

  export type CreditCardMinAggregateOutputType = {
    id: number | null
    creditLimit: number | null
    currentCredit: number | null
    cardId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreditCardMaxAggregateOutputType = {
    id: number | null
    creditLimit: number | null
    currentCredit: number | null
    cardId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CreditCardCountAggregateOutputType = {
    id: number
    creditLimit: number
    currentCredit: number
    cardId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CreditCardAvgAggregateInputType = {
    id?: true
    creditLimit?: true
    currentCredit?: true
    cardId?: true
  }

  export type CreditCardSumAggregateInputType = {
    id?: true
    creditLimit?: true
    currentCredit?: true
    cardId?: true
  }

  export type CreditCardMinAggregateInputType = {
    id?: true
    creditLimit?: true
    currentCredit?: true
    cardId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreditCardMaxAggregateInputType = {
    id?: true
    creditLimit?: true
    currentCredit?: true
    cardId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CreditCardCountAggregateInputType = {
    id?: true
    creditLimit?: true
    currentCredit?: true
    cardId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CreditCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditCard to aggregate.
     */
    where?: CreditCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCards to fetch.
     */
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditCards
    **/
    _count?: true | CreditCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditCardMaxAggregateInputType
  }

  export type GetCreditCardAggregateType<T extends CreditCardAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditCard[P]>
      : GetScalarType<T[P], AggregateCreditCard[P]>
  }




  export type CreditCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditCardWhereInput
    orderBy?: CreditCardOrderByWithAggregationInput | CreditCardOrderByWithAggregationInput[]
    by: CreditCardScalarFieldEnum[] | CreditCardScalarFieldEnum
    having?: CreditCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditCardCountAggregateInputType | true
    _avg?: CreditCardAvgAggregateInputType
    _sum?: CreditCardSumAggregateInputType
    _min?: CreditCardMinAggregateInputType
    _max?: CreditCardMaxAggregateInputType
  }

  export type CreditCardGroupByOutputType = {
    id: number
    creditLimit: number
    currentCredit: number
    cardId: number
    createdAt: Date
    updatedAt: Date
    _count: CreditCardCountAggregateOutputType | null
    _avg: CreditCardAvgAggregateOutputType | null
    _sum: CreditCardSumAggregateOutputType | null
    _min: CreditCardMinAggregateOutputType | null
    _max: CreditCardMaxAggregateOutputType | null
  }

  type GetCreditCardGroupByPayload<T extends CreditCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditCardGroupByOutputType[P]>
            : GetScalarType<T[P], CreditCardGroupByOutputType[P]>
        }
      >
    >


  export type CreditCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creditLimit?: boolean
    currentCredit?: boolean
    cardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditCard"]>

  export type CreditCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creditLimit?: boolean
    currentCredit?: boolean
    cardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creditCard"]>

  export type CreditCardSelectScalar = {
    id?: boolean
    creditLimit?: boolean
    currentCredit?: boolean
    cardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CreditCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type CreditCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Card?: boolean | CardDefaultArgs<ExtArgs>
  }

  export type $CreditCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditCard"
    objects: {
      Card: Prisma.$CardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      creditLimit: number
      currentCredit: number
      cardId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["creditCard"]>
    composites: {}
  }

  type CreditCardGetPayload<S extends boolean | null | undefined | CreditCardDefaultArgs> = $Result.GetResult<Prisma.$CreditCardPayload, S>

  type CreditCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CreditCardFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CreditCardCountAggregateInputType | true
    }

  export interface CreditCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditCard'], meta: { name: 'CreditCard' } }
    /**
     * Find zero or one CreditCard that matches the filter.
     * @param {CreditCardFindUniqueArgs} args - Arguments to find a CreditCard
     * @example
     * // Get one CreditCard
     * const creditCard = await prisma.creditCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditCardFindUniqueArgs>(args: SelectSubset<T, CreditCardFindUniqueArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CreditCard that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CreditCardFindUniqueOrThrowArgs} args - Arguments to find a CreditCard
     * @example
     * // Get one CreditCard
     * const creditCard = await prisma.creditCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditCardFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CreditCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardFindFirstArgs} args - Arguments to find a CreditCard
     * @example
     * // Get one CreditCard
     * const creditCard = await prisma.creditCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditCardFindFirstArgs>(args?: SelectSubset<T, CreditCardFindFirstArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CreditCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardFindFirstOrThrowArgs} args - Arguments to find a CreditCard
     * @example
     * // Get one CreditCard
     * const creditCard = await prisma.creditCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditCardFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CreditCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditCards
     * const creditCards = await prisma.creditCard.findMany()
     * 
     * // Get first 10 CreditCards
     * const creditCards = await prisma.creditCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditCardWithIdOnly = await prisma.creditCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditCardFindManyArgs>(args?: SelectSubset<T, CreditCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CreditCard.
     * @param {CreditCardCreateArgs} args - Arguments to create a CreditCard.
     * @example
     * // Create one CreditCard
     * const CreditCard = await prisma.creditCard.create({
     *   data: {
     *     // ... data to create a CreditCard
     *   }
     * })
     * 
     */
    create<T extends CreditCardCreateArgs>(args: SelectSubset<T, CreditCardCreateArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CreditCards.
     * @param {CreditCardCreateManyArgs} args - Arguments to create many CreditCards.
     * @example
     * // Create many CreditCards
     * const creditCard = await prisma.creditCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditCardCreateManyArgs>(args?: SelectSubset<T, CreditCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreditCards and returns the data saved in the database.
     * @param {CreditCardCreateManyAndReturnArgs} args - Arguments to create many CreditCards.
     * @example
     * // Create many CreditCards
     * const creditCard = await prisma.creditCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreditCards and only return the `id`
     * const creditCardWithIdOnly = await prisma.creditCard.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditCardCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CreditCard.
     * @param {CreditCardDeleteArgs} args - Arguments to delete one CreditCard.
     * @example
     * // Delete one CreditCard
     * const CreditCard = await prisma.creditCard.delete({
     *   where: {
     *     // ... filter to delete one CreditCard
     *   }
     * })
     * 
     */
    delete<T extends CreditCardDeleteArgs>(args: SelectSubset<T, CreditCardDeleteArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CreditCard.
     * @param {CreditCardUpdateArgs} args - Arguments to update one CreditCard.
     * @example
     * // Update one CreditCard
     * const creditCard = await prisma.creditCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditCardUpdateArgs>(args: SelectSubset<T, CreditCardUpdateArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CreditCards.
     * @param {CreditCardDeleteManyArgs} args - Arguments to filter CreditCards to delete.
     * @example
     * // Delete a few CreditCards
     * const { count } = await prisma.creditCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditCardDeleteManyArgs>(args?: SelectSubset<T, CreditCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditCards
     * const creditCard = await prisma.creditCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditCardUpdateManyArgs>(args: SelectSubset<T, CreditCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CreditCard.
     * @param {CreditCardUpsertArgs} args - Arguments to update or create a CreditCard.
     * @example
     * // Update or create a CreditCard
     * const creditCard = await prisma.creditCard.upsert({
     *   create: {
     *     // ... data to create a CreditCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditCard we want to update
     *   }
     * })
     */
    upsert<T extends CreditCardUpsertArgs>(args: SelectSubset<T, CreditCardUpsertArgs<ExtArgs>>): Prisma__CreditCardClient<$Result.GetResult<Prisma.$CreditCardPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CreditCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardCountArgs} args - Arguments to filter CreditCards to count.
     * @example
     * // Count the number of CreditCards
     * const count = await prisma.creditCard.count({
     *   where: {
     *     // ... the filter for the CreditCards we want to count
     *   }
     * })
    **/
    count<T extends CreditCardCountArgs>(
      args?: Subset<T, CreditCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreditCardAggregateArgs>(args: Subset<T, CreditCardAggregateArgs>): Prisma.PrismaPromise<GetCreditCardAggregateType<T>>

    /**
     * Group by CreditCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditCardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CreditCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditCardGroupByArgs['orderBy'] }
        : { orderBy?: CreditCardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CreditCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditCard model
   */
  readonly fields: CreditCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CreditCard model
   */ 
  interface CreditCardFieldRefs {
    readonly id: FieldRef<"CreditCard", 'Int'>
    readonly creditLimit: FieldRef<"CreditCard", 'Float'>
    readonly currentCredit: FieldRef<"CreditCard", 'Float'>
    readonly cardId: FieldRef<"CreditCard", 'Int'>
    readonly createdAt: FieldRef<"CreditCard", 'DateTime'>
    readonly updatedAt: FieldRef<"CreditCard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreditCard findUnique
   */
  export type CreditCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCard to fetch.
     */
    where: CreditCardWhereUniqueInput
  }

  /**
   * CreditCard findUniqueOrThrow
   */
  export type CreditCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCard to fetch.
     */
    where: CreditCardWhereUniqueInput
  }

  /**
   * CreditCard findFirst
   */
  export type CreditCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCard to fetch.
     */
    where?: CreditCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCards to fetch.
     */
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditCards.
     */
    cursor?: CreditCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditCards.
     */
    distinct?: CreditCardScalarFieldEnum | CreditCardScalarFieldEnum[]
  }

  /**
   * CreditCard findFirstOrThrow
   */
  export type CreditCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCard to fetch.
     */
    where?: CreditCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCards to fetch.
     */
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditCards.
     */
    cursor?: CreditCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditCards.
     */
    distinct?: CreditCardScalarFieldEnum | CreditCardScalarFieldEnum[]
  }

  /**
   * CreditCard findMany
   */
  export type CreditCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter, which CreditCards to fetch.
     */
    where?: CreditCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditCards to fetch.
     */
    orderBy?: CreditCardOrderByWithRelationInput | CreditCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditCards.
     */
    cursor?: CreditCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditCards.
     */
    skip?: number
    distinct?: CreditCardScalarFieldEnum | CreditCardScalarFieldEnum[]
  }

  /**
   * CreditCard create
   */
  export type CreditCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * The data needed to create a CreditCard.
     */
    data: XOR<CreditCardCreateInput, CreditCardUncheckedCreateInput>
  }

  /**
   * CreditCard createMany
   */
  export type CreditCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditCards.
     */
    data: CreditCardCreateManyInput | CreditCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditCard createManyAndReturn
   */
  export type CreditCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CreditCards.
     */
    data: CreditCardCreateManyInput | CreditCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CreditCard update
   */
  export type CreditCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * The data needed to update a CreditCard.
     */
    data: XOR<CreditCardUpdateInput, CreditCardUncheckedUpdateInput>
    /**
     * Choose, which CreditCard to update.
     */
    where: CreditCardWhereUniqueInput
  }

  /**
   * CreditCard updateMany
   */
  export type CreditCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditCards.
     */
    data: XOR<CreditCardUpdateManyMutationInput, CreditCardUncheckedUpdateManyInput>
    /**
     * Filter which CreditCards to update
     */
    where?: CreditCardWhereInput
  }

  /**
   * CreditCard upsert
   */
  export type CreditCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * The filter to search for the CreditCard to update in case it exists.
     */
    where: CreditCardWhereUniqueInput
    /**
     * In case the CreditCard found by the `where` argument doesn't exist, create a new CreditCard with this data.
     */
    create: XOR<CreditCardCreateInput, CreditCardUncheckedCreateInput>
    /**
     * In case the CreditCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditCardUpdateInput, CreditCardUncheckedUpdateInput>
  }

  /**
   * CreditCard delete
   */
  export type CreditCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
    /**
     * Filter which CreditCard to delete.
     */
    where: CreditCardWhereUniqueInput
  }

  /**
   * CreditCard deleteMany
   */
  export type CreditCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditCards to delete
     */
    where?: CreditCardWhereInput
  }

  /**
   * CreditCard without action
   */
  export type CreditCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditCard
     */
    select?: CreditCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CreditCardInclude<ExtArgs> | null
  }


  /**
   * Model DebitCard
   */

  export type AggregateDebitCard = {
    _count: DebitCardCountAggregateOutputType | null
    _avg: DebitCardAvgAggregateOutputType | null
    _sum: DebitCardSumAggregateOutputType | null
    _min: DebitCardMinAggregateOutputType | null
    _max: DebitCardMaxAggregateOutputType | null
  }

  export type DebitCardAvgAggregateOutputType = {
    id: number | null
    balance: number | null
    cardId: number | null
  }

  export type DebitCardSumAggregateOutputType = {
    id: number | null
    balance: number | null
    cardId: number | null
  }

  export type DebitCardMinAggregateOutputType = {
    id: number | null
    balance: number | null
    cardId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DebitCardMaxAggregateOutputType = {
    id: number | null
    balance: number | null
    cardId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DebitCardCountAggregateOutputType = {
    id: number
    balance: number
    cardId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DebitCardAvgAggregateInputType = {
    id?: true
    balance?: true
    cardId?: true
  }

  export type DebitCardSumAggregateInputType = {
    id?: true
    balance?: true
    cardId?: true
  }

  export type DebitCardMinAggregateInputType = {
    id?: true
    balance?: true
    cardId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DebitCardMaxAggregateInputType = {
    id?: true
    balance?: true
    cardId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DebitCardCountAggregateInputType = {
    id?: true
    balance?: true
    cardId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DebitCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DebitCard to aggregate.
     */
    where?: DebitCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebitCards to fetch.
     */
    orderBy?: DebitCardOrderByWithRelationInput | DebitCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DebitCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebitCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebitCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DebitCards
    **/
    _count?: true | DebitCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DebitCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DebitCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DebitCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DebitCardMaxAggregateInputType
  }

  export type GetDebitCardAggregateType<T extends DebitCardAggregateArgs> = {
        [P in keyof T & keyof AggregateDebitCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDebitCard[P]>
      : GetScalarType<T[P], AggregateDebitCard[P]>
  }




  export type DebitCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DebitCardWhereInput
    orderBy?: DebitCardOrderByWithAggregationInput | DebitCardOrderByWithAggregationInput[]
    by: DebitCardScalarFieldEnum[] | DebitCardScalarFieldEnum
    having?: DebitCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DebitCardCountAggregateInputType | true
    _avg?: DebitCardAvgAggregateInputType
    _sum?: DebitCardSumAggregateInputType
    _min?: DebitCardMinAggregateInputType
    _max?: DebitCardMaxAggregateInputType
  }

  export type DebitCardGroupByOutputType = {
    id: number
    balance: number
    cardId: number
    createdAt: Date
    updatedAt: Date
    _count: DebitCardCountAggregateOutputType | null
    _avg: DebitCardAvgAggregateOutputType | null
    _sum: DebitCardSumAggregateOutputType | null
    _min: DebitCardMinAggregateOutputType | null
    _max: DebitCardMaxAggregateOutputType | null
  }

  type GetDebitCardGroupByPayload<T extends DebitCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DebitCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DebitCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DebitCardGroupByOutputType[P]>
            : GetScalarType<T[P], DebitCardGroupByOutputType[P]>
        }
      >
    >


  export type DebitCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    cardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["debitCard"]>

  export type DebitCardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    cardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["debitCard"]>

  export type DebitCardSelectScalar = {
    id?: boolean
    balance?: boolean
    cardId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DebitCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Card?: boolean | CardDefaultArgs<ExtArgs>
  }
  export type DebitCardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Card?: boolean | CardDefaultArgs<ExtArgs>
  }

  export type $DebitCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DebitCard"
    objects: {
      Card: Prisma.$CardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      balance: number
      cardId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["debitCard"]>
    composites: {}
  }

  type DebitCardGetPayload<S extends boolean | null | undefined | DebitCardDefaultArgs> = $Result.GetResult<Prisma.$DebitCardPayload, S>

  type DebitCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DebitCardFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DebitCardCountAggregateInputType | true
    }

  export interface DebitCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DebitCard'], meta: { name: 'DebitCard' } }
    /**
     * Find zero or one DebitCard that matches the filter.
     * @param {DebitCardFindUniqueArgs} args - Arguments to find a DebitCard
     * @example
     * // Get one DebitCard
     * const debitCard = await prisma.debitCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DebitCardFindUniqueArgs>(args: SelectSubset<T, DebitCardFindUniqueArgs<ExtArgs>>): Prisma__DebitCardClient<$Result.GetResult<Prisma.$DebitCardPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DebitCard that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DebitCardFindUniqueOrThrowArgs} args - Arguments to find a DebitCard
     * @example
     * // Get one DebitCard
     * const debitCard = await prisma.debitCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DebitCardFindUniqueOrThrowArgs>(args: SelectSubset<T, DebitCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DebitCardClient<$Result.GetResult<Prisma.$DebitCardPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DebitCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebitCardFindFirstArgs} args - Arguments to find a DebitCard
     * @example
     * // Get one DebitCard
     * const debitCard = await prisma.debitCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DebitCardFindFirstArgs>(args?: SelectSubset<T, DebitCardFindFirstArgs<ExtArgs>>): Prisma__DebitCardClient<$Result.GetResult<Prisma.$DebitCardPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DebitCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebitCardFindFirstOrThrowArgs} args - Arguments to find a DebitCard
     * @example
     * // Get one DebitCard
     * const debitCard = await prisma.debitCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DebitCardFindFirstOrThrowArgs>(args?: SelectSubset<T, DebitCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__DebitCardClient<$Result.GetResult<Prisma.$DebitCardPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DebitCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebitCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DebitCards
     * const debitCards = await prisma.debitCard.findMany()
     * 
     * // Get first 10 DebitCards
     * const debitCards = await prisma.debitCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const debitCardWithIdOnly = await prisma.debitCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DebitCardFindManyArgs>(args?: SelectSubset<T, DebitCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebitCardPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DebitCard.
     * @param {DebitCardCreateArgs} args - Arguments to create a DebitCard.
     * @example
     * // Create one DebitCard
     * const DebitCard = await prisma.debitCard.create({
     *   data: {
     *     // ... data to create a DebitCard
     *   }
     * })
     * 
     */
    create<T extends DebitCardCreateArgs>(args: SelectSubset<T, DebitCardCreateArgs<ExtArgs>>): Prisma__DebitCardClient<$Result.GetResult<Prisma.$DebitCardPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DebitCards.
     * @param {DebitCardCreateManyArgs} args - Arguments to create many DebitCards.
     * @example
     * // Create many DebitCards
     * const debitCard = await prisma.debitCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DebitCardCreateManyArgs>(args?: SelectSubset<T, DebitCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DebitCards and returns the data saved in the database.
     * @param {DebitCardCreateManyAndReturnArgs} args - Arguments to create many DebitCards.
     * @example
     * // Create many DebitCards
     * const debitCard = await prisma.debitCard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DebitCards and only return the `id`
     * const debitCardWithIdOnly = await prisma.debitCard.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DebitCardCreateManyAndReturnArgs>(args?: SelectSubset<T, DebitCardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DebitCardPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DebitCard.
     * @param {DebitCardDeleteArgs} args - Arguments to delete one DebitCard.
     * @example
     * // Delete one DebitCard
     * const DebitCard = await prisma.debitCard.delete({
     *   where: {
     *     // ... filter to delete one DebitCard
     *   }
     * })
     * 
     */
    delete<T extends DebitCardDeleteArgs>(args: SelectSubset<T, DebitCardDeleteArgs<ExtArgs>>): Prisma__DebitCardClient<$Result.GetResult<Prisma.$DebitCardPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DebitCard.
     * @param {DebitCardUpdateArgs} args - Arguments to update one DebitCard.
     * @example
     * // Update one DebitCard
     * const debitCard = await prisma.debitCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DebitCardUpdateArgs>(args: SelectSubset<T, DebitCardUpdateArgs<ExtArgs>>): Prisma__DebitCardClient<$Result.GetResult<Prisma.$DebitCardPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DebitCards.
     * @param {DebitCardDeleteManyArgs} args - Arguments to filter DebitCards to delete.
     * @example
     * // Delete a few DebitCards
     * const { count } = await prisma.debitCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DebitCardDeleteManyArgs>(args?: SelectSubset<T, DebitCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DebitCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebitCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DebitCards
     * const debitCard = await prisma.debitCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DebitCardUpdateManyArgs>(args: SelectSubset<T, DebitCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DebitCard.
     * @param {DebitCardUpsertArgs} args - Arguments to update or create a DebitCard.
     * @example
     * // Update or create a DebitCard
     * const debitCard = await prisma.debitCard.upsert({
     *   create: {
     *     // ... data to create a DebitCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DebitCard we want to update
     *   }
     * })
     */
    upsert<T extends DebitCardUpsertArgs>(args: SelectSubset<T, DebitCardUpsertArgs<ExtArgs>>): Prisma__DebitCardClient<$Result.GetResult<Prisma.$DebitCardPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DebitCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebitCardCountArgs} args - Arguments to filter DebitCards to count.
     * @example
     * // Count the number of DebitCards
     * const count = await prisma.debitCard.count({
     *   where: {
     *     // ... the filter for the DebitCards we want to count
     *   }
     * })
    **/
    count<T extends DebitCardCountArgs>(
      args?: Subset<T, DebitCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DebitCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DebitCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebitCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DebitCardAggregateArgs>(args: Subset<T, DebitCardAggregateArgs>): Prisma.PrismaPromise<GetDebitCardAggregateType<T>>

    /**
     * Group by DebitCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DebitCardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DebitCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DebitCardGroupByArgs['orderBy'] }
        : { orderBy?: DebitCardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DebitCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDebitCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DebitCard model
   */
  readonly fields: DebitCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DebitCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DebitCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DebitCard model
   */ 
  interface DebitCardFieldRefs {
    readonly id: FieldRef<"DebitCard", 'Int'>
    readonly balance: FieldRef<"DebitCard", 'Float'>
    readonly cardId: FieldRef<"DebitCard", 'Int'>
    readonly createdAt: FieldRef<"DebitCard", 'DateTime'>
    readonly updatedAt: FieldRef<"DebitCard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DebitCard findUnique
   */
  export type DebitCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardInclude<ExtArgs> | null
    /**
     * Filter, which DebitCard to fetch.
     */
    where: DebitCardWhereUniqueInput
  }

  /**
   * DebitCard findUniqueOrThrow
   */
  export type DebitCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardInclude<ExtArgs> | null
    /**
     * Filter, which DebitCard to fetch.
     */
    where: DebitCardWhereUniqueInput
  }

  /**
   * DebitCard findFirst
   */
  export type DebitCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardInclude<ExtArgs> | null
    /**
     * Filter, which DebitCard to fetch.
     */
    where?: DebitCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebitCards to fetch.
     */
    orderBy?: DebitCardOrderByWithRelationInput | DebitCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DebitCards.
     */
    cursor?: DebitCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebitCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebitCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DebitCards.
     */
    distinct?: DebitCardScalarFieldEnum | DebitCardScalarFieldEnum[]
  }

  /**
   * DebitCard findFirstOrThrow
   */
  export type DebitCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardInclude<ExtArgs> | null
    /**
     * Filter, which DebitCard to fetch.
     */
    where?: DebitCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebitCards to fetch.
     */
    orderBy?: DebitCardOrderByWithRelationInput | DebitCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DebitCards.
     */
    cursor?: DebitCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebitCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebitCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DebitCards.
     */
    distinct?: DebitCardScalarFieldEnum | DebitCardScalarFieldEnum[]
  }

  /**
   * DebitCard findMany
   */
  export type DebitCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardInclude<ExtArgs> | null
    /**
     * Filter, which DebitCards to fetch.
     */
    where?: DebitCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DebitCards to fetch.
     */
    orderBy?: DebitCardOrderByWithRelationInput | DebitCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DebitCards.
     */
    cursor?: DebitCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DebitCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DebitCards.
     */
    skip?: number
    distinct?: DebitCardScalarFieldEnum | DebitCardScalarFieldEnum[]
  }

  /**
   * DebitCard create
   */
  export type DebitCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardInclude<ExtArgs> | null
    /**
     * The data needed to create a DebitCard.
     */
    data: XOR<DebitCardCreateInput, DebitCardUncheckedCreateInput>
  }

  /**
   * DebitCard createMany
   */
  export type DebitCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DebitCards.
     */
    data: DebitCardCreateManyInput | DebitCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DebitCard createManyAndReturn
   */
  export type DebitCardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DebitCards.
     */
    data: DebitCardCreateManyInput | DebitCardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DebitCard update
   */
  export type DebitCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardInclude<ExtArgs> | null
    /**
     * The data needed to update a DebitCard.
     */
    data: XOR<DebitCardUpdateInput, DebitCardUncheckedUpdateInput>
    /**
     * Choose, which DebitCard to update.
     */
    where: DebitCardWhereUniqueInput
  }

  /**
   * DebitCard updateMany
   */
  export type DebitCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DebitCards.
     */
    data: XOR<DebitCardUpdateManyMutationInput, DebitCardUncheckedUpdateManyInput>
    /**
     * Filter which DebitCards to update
     */
    where?: DebitCardWhereInput
  }

  /**
   * DebitCard upsert
   */
  export type DebitCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardInclude<ExtArgs> | null
    /**
     * The filter to search for the DebitCard to update in case it exists.
     */
    where: DebitCardWhereUniqueInput
    /**
     * In case the DebitCard found by the `where` argument doesn't exist, create a new DebitCard with this data.
     */
    create: XOR<DebitCardCreateInput, DebitCardUncheckedCreateInput>
    /**
     * In case the DebitCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DebitCardUpdateInput, DebitCardUncheckedUpdateInput>
  }

  /**
   * DebitCard delete
   */
  export type DebitCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardInclude<ExtArgs> | null
    /**
     * Filter which DebitCard to delete.
     */
    where: DebitCardWhereUniqueInput
  }

  /**
   * DebitCard deleteMany
   */
  export type DebitCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DebitCards to delete
     */
    where?: DebitCardWhereInput
  }

  /**
   * DebitCard without action
   */
  export type DebitCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DebitCard
     */
    select?: DebitCardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DebitCardInclude<ExtArgs> | null
  }


  /**
   * Model Issuer
   */

  export type AggregateIssuer = {
    _count: IssuerCountAggregateOutputType | null
    _avg: IssuerAvgAggregateOutputType | null
    _sum: IssuerSumAggregateOutputType | null
    _min: IssuerMinAggregateOutputType | null
    _max: IssuerMaxAggregateOutputType | null
  }

  export type IssuerAvgAggregateOutputType = {
    id: number | null
  }

  export type IssuerSumAggregateOutputType = {
    id: number | null
  }

  export type IssuerMinAggregateOutputType = {
    id: number | null
    name: string | null
    color: string | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IssuerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    color: string | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IssuerCountAggregateOutputType = {
    id: number
    name: number
    color: number
    icon: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IssuerAvgAggregateInputType = {
    id?: true
  }

  export type IssuerSumAggregateInputType = {
    id?: true
  }

  export type IssuerMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IssuerMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IssuerCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IssuerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issuer to aggregate.
     */
    where?: IssuerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issuers to fetch.
     */
    orderBy?: IssuerOrderByWithRelationInput | IssuerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IssuerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issuers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issuers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Issuers
    **/
    _count?: true | IssuerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IssuerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IssuerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IssuerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IssuerMaxAggregateInputType
  }

  export type GetIssuerAggregateType<T extends IssuerAggregateArgs> = {
        [P in keyof T & keyof AggregateIssuer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssuer[P]>
      : GetScalarType<T[P], AggregateIssuer[P]>
  }




  export type IssuerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssuerWhereInput
    orderBy?: IssuerOrderByWithAggregationInput | IssuerOrderByWithAggregationInput[]
    by: IssuerScalarFieldEnum[] | IssuerScalarFieldEnum
    having?: IssuerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IssuerCountAggregateInputType | true
    _avg?: IssuerAvgAggregateInputType
    _sum?: IssuerSumAggregateInputType
    _min?: IssuerMinAggregateInputType
    _max?: IssuerMaxAggregateInputType
  }

  export type IssuerGroupByOutputType = {
    id: number
    name: string
    color: string
    icon: string | null
    createdAt: Date
    updatedAt: Date
    _count: IssuerCountAggregateOutputType | null
    _avg: IssuerAvgAggregateOutputType | null
    _sum: IssuerSumAggregateOutputType | null
    _min: IssuerMinAggregateOutputType | null
    _max: IssuerMaxAggregateOutputType | null
  }

  type GetIssuerGroupByPayload<T extends IssuerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IssuerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IssuerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssuerGroupByOutputType[P]>
            : GetScalarType<T[P], IssuerGroupByOutputType[P]>
        }
      >
    >


  export type IssuerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Card?: boolean | Issuer$CardArgs<ExtArgs>
    _count?: boolean | IssuerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issuer"]>

  export type IssuerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["issuer"]>

  export type IssuerSelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IssuerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Card?: boolean | Issuer$CardArgs<ExtArgs>
    _count?: boolean | IssuerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IssuerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IssuerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Issuer"
    objects: {
      Card: Prisma.$CardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      color: string
      icon: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["issuer"]>
    composites: {}
  }

  type IssuerGetPayload<S extends boolean | null | undefined | IssuerDefaultArgs> = $Result.GetResult<Prisma.$IssuerPayload, S>

  type IssuerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<IssuerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: IssuerCountAggregateInputType | true
    }

  export interface IssuerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Issuer'], meta: { name: 'Issuer' } }
    /**
     * Find zero or one Issuer that matches the filter.
     * @param {IssuerFindUniqueArgs} args - Arguments to find a Issuer
     * @example
     * // Get one Issuer
     * const issuer = await prisma.issuer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IssuerFindUniqueArgs>(args: SelectSubset<T, IssuerFindUniqueArgs<ExtArgs>>): Prisma__IssuerClient<$Result.GetResult<Prisma.$IssuerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Issuer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {IssuerFindUniqueOrThrowArgs} args - Arguments to find a Issuer
     * @example
     * // Get one Issuer
     * const issuer = await prisma.issuer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IssuerFindUniqueOrThrowArgs>(args: SelectSubset<T, IssuerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IssuerClient<$Result.GetResult<Prisma.$IssuerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Issuer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuerFindFirstArgs} args - Arguments to find a Issuer
     * @example
     * // Get one Issuer
     * const issuer = await prisma.issuer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IssuerFindFirstArgs>(args?: SelectSubset<T, IssuerFindFirstArgs<ExtArgs>>): Prisma__IssuerClient<$Result.GetResult<Prisma.$IssuerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Issuer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuerFindFirstOrThrowArgs} args - Arguments to find a Issuer
     * @example
     * // Get one Issuer
     * const issuer = await prisma.issuer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IssuerFindFirstOrThrowArgs>(args?: SelectSubset<T, IssuerFindFirstOrThrowArgs<ExtArgs>>): Prisma__IssuerClient<$Result.GetResult<Prisma.$IssuerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Issuers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Issuers
     * const issuers = await prisma.issuer.findMany()
     * 
     * // Get first 10 Issuers
     * const issuers = await prisma.issuer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const issuerWithIdOnly = await prisma.issuer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IssuerFindManyArgs>(args?: SelectSubset<T, IssuerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Issuer.
     * @param {IssuerCreateArgs} args - Arguments to create a Issuer.
     * @example
     * // Create one Issuer
     * const Issuer = await prisma.issuer.create({
     *   data: {
     *     // ... data to create a Issuer
     *   }
     * })
     * 
     */
    create<T extends IssuerCreateArgs>(args: SelectSubset<T, IssuerCreateArgs<ExtArgs>>): Prisma__IssuerClient<$Result.GetResult<Prisma.$IssuerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Issuers.
     * @param {IssuerCreateManyArgs} args - Arguments to create many Issuers.
     * @example
     * // Create many Issuers
     * const issuer = await prisma.issuer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IssuerCreateManyArgs>(args?: SelectSubset<T, IssuerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Issuers and returns the data saved in the database.
     * @param {IssuerCreateManyAndReturnArgs} args - Arguments to create many Issuers.
     * @example
     * // Create many Issuers
     * const issuer = await prisma.issuer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Issuers and only return the `id`
     * const issuerWithIdOnly = await prisma.issuer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IssuerCreateManyAndReturnArgs>(args?: SelectSubset<T, IssuerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Issuer.
     * @param {IssuerDeleteArgs} args - Arguments to delete one Issuer.
     * @example
     * // Delete one Issuer
     * const Issuer = await prisma.issuer.delete({
     *   where: {
     *     // ... filter to delete one Issuer
     *   }
     * })
     * 
     */
    delete<T extends IssuerDeleteArgs>(args: SelectSubset<T, IssuerDeleteArgs<ExtArgs>>): Prisma__IssuerClient<$Result.GetResult<Prisma.$IssuerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Issuer.
     * @param {IssuerUpdateArgs} args - Arguments to update one Issuer.
     * @example
     * // Update one Issuer
     * const issuer = await prisma.issuer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IssuerUpdateArgs>(args: SelectSubset<T, IssuerUpdateArgs<ExtArgs>>): Prisma__IssuerClient<$Result.GetResult<Prisma.$IssuerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Issuers.
     * @param {IssuerDeleteManyArgs} args - Arguments to filter Issuers to delete.
     * @example
     * // Delete a few Issuers
     * const { count } = await prisma.issuer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IssuerDeleteManyArgs>(args?: SelectSubset<T, IssuerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Issuers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Issuers
     * const issuer = await prisma.issuer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IssuerUpdateManyArgs>(args: SelectSubset<T, IssuerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Issuer.
     * @param {IssuerUpsertArgs} args - Arguments to update or create a Issuer.
     * @example
     * // Update or create a Issuer
     * const issuer = await prisma.issuer.upsert({
     *   create: {
     *     // ... data to create a Issuer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Issuer we want to update
     *   }
     * })
     */
    upsert<T extends IssuerUpsertArgs>(args: SelectSubset<T, IssuerUpsertArgs<ExtArgs>>): Prisma__IssuerClient<$Result.GetResult<Prisma.$IssuerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Issuers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuerCountArgs} args - Arguments to filter Issuers to count.
     * @example
     * // Count the number of Issuers
     * const count = await prisma.issuer.count({
     *   where: {
     *     // ... the filter for the Issuers we want to count
     *   }
     * })
    **/
    count<T extends IssuerCountArgs>(
      args?: Subset<T, IssuerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IssuerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Issuer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IssuerAggregateArgs>(args: Subset<T, IssuerAggregateArgs>): Prisma.PrismaPromise<GetIssuerAggregateType<T>>

    /**
     * Group by Issuer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssuerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IssuerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IssuerGroupByArgs['orderBy'] }
        : { orderBy?: IssuerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IssuerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssuerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Issuer model
   */
  readonly fields: IssuerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Issuer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IssuerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Card<T extends Issuer$CardArgs<ExtArgs> = {}>(args?: Subset<T, Issuer$CardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Issuer model
   */ 
  interface IssuerFieldRefs {
    readonly id: FieldRef<"Issuer", 'Int'>
    readonly name: FieldRef<"Issuer", 'String'>
    readonly color: FieldRef<"Issuer", 'String'>
    readonly icon: FieldRef<"Issuer", 'String'>
    readonly createdAt: FieldRef<"Issuer", 'DateTime'>
    readonly updatedAt: FieldRef<"Issuer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Issuer findUnique
   */
  export type IssuerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issuer
     */
    select?: IssuerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuerInclude<ExtArgs> | null
    /**
     * Filter, which Issuer to fetch.
     */
    where: IssuerWhereUniqueInput
  }

  /**
   * Issuer findUniqueOrThrow
   */
  export type IssuerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issuer
     */
    select?: IssuerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuerInclude<ExtArgs> | null
    /**
     * Filter, which Issuer to fetch.
     */
    where: IssuerWhereUniqueInput
  }

  /**
   * Issuer findFirst
   */
  export type IssuerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issuer
     */
    select?: IssuerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuerInclude<ExtArgs> | null
    /**
     * Filter, which Issuer to fetch.
     */
    where?: IssuerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issuers to fetch.
     */
    orderBy?: IssuerOrderByWithRelationInput | IssuerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issuers.
     */
    cursor?: IssuerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issuers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issuers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issuers.
     */
    distinct?: IssuerScalarFieldEnum | IssuerScalarFieldEnum[]
  }

  /**
   * Issuer findFirstOrThrow
   */
  export type IssuerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issuer
     */
    select?: IssuerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuerInclude<ExtArgs> | null
    /**
     * Filter, which Issuer to fetch.
     */
    where?: IssuerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issuers to fetch.
     */
    orderBy?: IssuerOrderByWithRelationInput | IssuerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issuers.
     */
    cursor?: IssuerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issuers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issuers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issuers.
     */
    distinct?: IssuerScalarFieldEnum | IssuerScalarFieldEnum[]
  }

  /**
   * Issuer findMany
   */
  export type IssuerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issuer
     */
    select?: IssuerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuerInclude<ExtArgs> | null
    /**
     * Filter, which Issuers to fetch.
     */
    where?: IssuerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issuers to fetch.
     */
    orderBy?: IssuerOrderByWithRelationInput | IssuerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Issuers.
     */
    cursor?: IssuerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issuers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issuers.
     */
    skip?: number
    distinct?: IssuerScalarFieldEnum | IssuerScalarFieldEnum[]
  }

  /**
   * Issuer create
   */
  export type IssuerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issuer
     */
    select?: IssuerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuerInclude<ExtArgs> | null
    /**
     * The data needed to create a Issuer.
     */
    data: XOR<IssuerCreateInput, IssuerUncheckedCreateInput>
  }

  /**
   * Issuer createMany
   */
  export type IssuerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Issuers.
     */
    data: IssuerCreateManyInput | IssuerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Issuer createManyAndReturn
   */
  export type IssuerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issuer
     */
    select?: IssuerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Issuers.
     */
    data: IssuerCreateManyInput | IssuerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Issuer update
   */
  export type IssuerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issuer
     */
    select?: IssuerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuerInclude<ExtArgs> | null
    /**
     * The data needed to update a Issuer.
     */
    data: XOR<IssuerUpdateInput, IssuerUncheckedUpdateInput>
    /**
     * Choose, which Issuer to update.
     */
    where: IssuerWhereUniqueInput
  }

  /**
   * Issuer updateMany
   */
  export type IssuerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Issuers.
     */
    data: XOR<IssuerUpdateManyMutationInput, IssuerUncheckedUpdateManyInput>
    /**
     * Filter which Issuers to update
     */
    where?: IssuerWhereInput
  }

  /**
   * Issuer upsert
   */
  export type IssuerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issuer
     */
    select?: IssuerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuerInclude<ExtArgs> | null
    /**
     * The filter to search for the Issuer to update in case it exists.
     */
    where: IssuerWhereUniqueInput
    /**
     * In case the Issuer found by the `where` argument doesn't exist, create a new Issuer with this data.
     */
    create: XOR<IssuerCreateInput, IssuerUncheckedCreateInput>
    /**
     * In case the Issuer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IssuerUpdateInput, IssuerUncheckedUpdateInput>
  }

  /**
   * Issuer delete
   */
  export type IssuerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issuer
     */
    select?: IssuerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuerInclude<ExtArgs> | null
    /**
     * Filter which Issuer to delete.
     */
    where: IssuerWhereUniqueInput
  }

  /**
   * Issuer deleteMany
   */
  export type IssuerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issuers to delete
     */
    where?: IssuerWhereInput
  }

  /**
   * Issuer.Card
   */
  export type Issuer$CardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    where?: CardWhereInput
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    cursor?: CardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Issuer without action
   */
  export type IssuerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issuer
     */
    select?: IssuerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssuerInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    cardId: number | null
    userId: number | null
  }

  export type TransactionSumAggregateOutputType = {
    id: number | null
    amount: number | null
    cardId: number | null
    userId: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: number | null
    type: $Enums.TransactionType | null
    amount: number | null
    date: Date | null
    method: $Enums.TransactionMethod | null
    description: string | null
    cardId: number | null
    userId: number | null
    currency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: number | null
    type: $Enums.TransactionType | null
    amount: number | null
    date: Date | null
    method: $Enums.TransactionMethod | null
    description: string | null
    cardId: number | null
    userId: number | null
    currency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    type: number
    amount: number
    date: number
    method: number
    description: number
    cardId: number
    userId: number
    currency: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    id?: true
    amount?: true
    cardId?: true
    userId?: true
  }

  export type TransactionSumAggregateInputType = {
    id?: true
    amount?: true
    cardId?: true
    userId?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    type?: true
    amount?: true
    date?: true
    method?: true
    description?: true
    cardId?: true
    userId?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    type?: true
    amount?: true
    date?: true
    method?: true
    description?: true
    cardId?: true
    userId?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    type?: true
    amount?: true
    date?: true
    method?: true
    description?: true
    cardId?: true
    userId?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: number
    type: $Enums.TransactionType
    amount: number
    date: Date
    method: $Enums.TransactionMethod
    description: string | null
    cardId: number
    userId: number
    currency: string
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    amount?: boolean
    date?: boolean
    method?: boolean
    description?: boolean
    cardId?: boolean
    userId?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Card?: boolean | CardDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    amount?: boolean
    date?: boolean
    method?: boolean
    description?: boolean
    cardId?: boolean
    userId?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Card?: boolean | CardDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    type?: boolean
    amount?: boolean
    date?: boolean
    method?: boolean
    description?: boolean
    cardId?: boolean
    userId?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Card?: boolean | CardDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Card?: boolean | CardDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      Card: Prisma.$CardPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.TransactionType
      amount: number
      date: Date
      method: $Enums.TransactionMethod
      description: string | null
      cardId: number
      userId: number
      currency: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */ 
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'Int'>
    readonly type: FieldRef<"Transaction", 'TransactionType'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly method: FieldRef<"Transaction", 'TransactionMethod'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly cardId: FieldRef<"Transaction", 'Int'>
    readonly userId: FieldRef<"Transaction", 'Int'>
    readonly currency: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    cpf: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    cpf: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    cpf: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    cpf?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    cpf?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    cpf?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    cpf: string | null
    phone: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    cpf?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Transaction?: boolean | User$TransactionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    cpf?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    cpf?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transaction?: boolean | User$TransactionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Transaction: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      cpf: string | null
      phone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Transaction<T extends User$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, User$TransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly cpf: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.Transaction
   */
  export type User$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    number: 'number',
    expiration: 'expiration',
    cvv: 'cvv',
    nickname: 'nickname',
    issuerId: 'issuerId',
    cardType: 'cardType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CardScalarFieldEnum = (typeof CardScalarFieldEnum)[keyof typeof CardScalarFieldEnum]


  export const CreditCardScalarFieldEnum: {
    id: 'id',
    creditLimit: 'creditLimit',
    currentCredit: 'currentCredit',
    cardId: 'cardId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CreditCardScalarFieldEnum = (typeof CreditCardScalarFieldEnum)[keyof typeof CreditCardScalarFieldEnum]


  export const DebitCardScalarFieldEnum: {
    id: 'id',
    balance: 'balance',
    cardId: 'cardId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DebitCardScalarFieldEnum = (typeof DebitCardScalarFieldEnum)[keyof typeof DebitCardScalarFieldEnum]


  export const IssuerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color',
    icon: 'icon',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IssuerScalarFieldEnum = (typeof IssuerScalarFieldEnum)[keyof typeof IssuerScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    amount: 'amount',
    date: 'date',
    method: 'method',
    description: 'description',
    cardId: 'cardId',
    userId: 'userId',
    currency: 'currency',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    cpf: 'cpf',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'CardType'
   */
  export type EnumCardTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CardType'>
    


  /**
   * Reference to a field of type 'CardType[]'
   */
  export type ListEnumCardTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CardType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'TransactionMethod'
   */
  export type EnumTransactionMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionMethod'>
    


  /**
   * Reference to a field of type 'TransactionMethod[]'
   */
  export type ListEnumTransactionMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionMethod[]'>
    
  /**
   * Deep Input Types
   */


  export type CardWhereInput = {
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    id?: IntFilter<"Card"> | number
    name?: StringFilter<"Card"> | string
    number?: StringNullableFilter<"Card"> | string | null
    expiration?: StringNullableFilter<"Card"> | string | null
    cvv?: StringNullableFilter<"Card"> | string | null
    nickname?: StringNullableFilter<"Card"> | string | null
    issuerId?: IntFilter<"Card"> | number
    cardType?: EnumCardTypeFilter<"Card"> | $Enums.CardType
    createdAt?: DateTimeFilter<"Card"> | Date | string
    updatedAt?: DateTimeFilter<"Card"> | Date | string
    Issuer?: XOR<IssuerRelationFilter, IssuerWhereInput>
    CreditCard?: XOR<CreditCardNullableRelationFilter, CreditCardWhereInput> | null
    DebitCard?: XOR<DebitCardNullableRelationFilter, DebitCardWhereInput> | null
    Transaction?: TransactionListRelationFilter
  }

  export type CardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrderInput | SortOrder
    expiration?: SortOrderInput | SortOrder
    cvv?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    issuerId?: SortOrder
    cardType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Issuer?: IssuerOrderByWithRelationInput
    CreditCard?: CreditCardOrderByWithRelationInput
    DebitCard?: DebitCardOrderByWithRelationInput
    Transaction?: TransactionOrderByRelationAggregateInput
  }

  export type CardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    number?: string
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    name?: StringFilter<"Card"> | string
    expiration?: StringNullableFilter<"Card"> | string | null
    cvv?: StringNullableFilter<"Card"> | string | null
    nickname?: StringNullableFilter<"Card"> | string | null
    issuerId?: IntFilter<"Card"> | number
    cardType?: EnumCardTypeFilter<"Card"> | $Enums.CardType
    createdAt?: DateTimeFilter<"Card"> | Date | string
    updatedAt?: DateTimeFilter<"Card"> | Date | string
    Issuer?: XOR<IssuerRelationFilter, IssuerWhereInput>
    CreditCard?: XOR<CreditCardNullableRelationFilter, CreditCardWhereInput> | null
    DebitCard?: XOR<DebitCardNullableRelationFilter, DebitCardWhereInput> | null
    Transaction?: TransactionListRelationFilter
  }, "id" | "number">

  export type CardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrderInput | SortOrder
    expiration?: SortOrderInput | SortOrder
    cvv?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    issuerId?: SortOrder
    cardType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CardCountOrderByAggregateInput
    _avg?: CardAvgOrderByAggregateInput
    _max?: CardMaxOrderByAggregateInput
    _min?: CardMinOrderByAggregateInput
    _sum?: CardSumOrderByAggregateInput
  }

  export type CardScalarWhereWithAggregatesInput = {
    AND?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    OR?: CardScalarWhereWithAggregatesInput[]
    NOT?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Card"> | number
    name?: StringWithAggregatesFilter<"Card"> | string
    number?: StringNullableWithAggregatesFilter<"Card"> | string | null
    expiration?: StringNullableWithAggregatesFilter<"Card"> | string | null
    cvv?: StringNullableWithAggregatesFilter<"Card"> | string | null
    nickname?: StringNullableWithAggregatesFilter<"Card"> | string | null
    issuerId?: IntWithAggregatesFilter<"Card"> | number
    cardType?: EnumCardTypeWithAggregatesFilter<"Card"> | $Enums.CardType
    createdAt?: DateTimeWithAggregatesFilter<"Card"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Card"> | Date | string
  }

  export type CreditCardWhereInput = {
    AND?: CreditCardWhereInput | CreditCardWhereInput[]
    OR?: CreditCardWhereInput[]
    NOT?: CreditCardWhereInput | CreditCardWhereInput[]
    id?: IntFilter<"CreditCard"> | number
    creditLimit?: FloatFilter<"CreditCard"> | number
    currentCredit?: FloatFilter<"CreditCard"> | number
    cardId?: IntFilter<"CreditCard"> | number
    createdAt?: DateTimeFilter<"CreditCard"> | Date | string
    updatedAt?: DateTimeFilter<"CreditCard"> | Date | string
    Card?: XOR<CardRelationFilter, CardWhereInput>
  }

  export type CreditCardOrderByWithRelationInput = {
    id?: SortOrder
    creditLimit?: SortOrder
    currentCredit?: SortOrder
    cardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Card?: CardOrderByWithRelationInput
  }

  export type CreditCardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cardId?: number
    AND?: CreditCardWhereInput | CreditCardWhereInput[]
    OR?: CreditCardWhereInput[]
    NOT?: CreditCardWhereInput | CreditCardWhereInput[]
    creditLimit?: FloatFilter<"CreditCard"> | number
    currentCredit?: FloatFilter<"CreditCard"> | number
    createdAt?: DateTimeFilter<"CreditCard"> | Date | string
    updatedAt?: DateTimeFilter<"CreditCard"> | Date | string
    Card?: XOR<CardRelationFilter, CardWhereInput>
  }, "id" | "cardId">

  export type CreditCardOrderByWithAggregationInput = {
    id?: SortOrder
    creditLimit?: SortOrder
    currentCredit?: SortOrder
    cardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CreditCardCountOrderByAggregateInput
    _avg?: CreditCardAvgOrderByAggregateInput
    _max?: CreditCardMaxOrderByAggregateInput
    _min?: CreditCardMinOrderByAggregateInput
    _sum?: CreditCardSumOrderByAggregateInput
  }

  export type CreditCardScalarWhereWithAggregatesInput = {
    AND?: CreditCardScalarWhereWithAggregatesInput | CreditCardScalarWhereWithAggregatesInput[]
    OR?: CreditCardScalarWhereWithAggregatesInput[]
    NOT?: CreditCardScalarWhereWithAggregatesInput | CreditCardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CreditCard"> | number
    creditLimit?: FloatWithAggregatesFilter<"CreditCard"> | number
    currentCredit?: FloatWithAggregatesFilter<"CreditCard"> | number
    cardId?: IntWithAggregatesFilter<"CreditCard"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CreditCard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CreditCard"> | Date | string
  }

  export type DebitCardWhereInput = {
    AND?: DebitCardWhereInput | DebitCardWhereInput[]
    OR?: DebitCardWhereInput[]
    NOT?: DebitCardWhereInput | DebitCardWhereInput[]
    id?: IntFilter<"DebitCard"> | number
    balance?: FloatFilter<"DebitCard"> | number
    cardId?: IntFilter<"DebitCard"> | number
    createdAt?: DateTimeFilter<"DebitCard"> | Date | string
    updatedAt?: DateTimeFilter<"DebitCard"> | Date | string
    Card?: XOR<CardRelationFilter, CardWhereInput>
  }

  export type DebitCardOrderByWithRelationInput = {
    id?: SortOrder
    balance?: SortOrder
    cardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Card?: CardOrderByWithRelationInput
  }

  export type DebitCardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cardId?: number
    AND?: DebitCardWhereInput | DebitCardWhereInput[]
    OR?: DebitCardWhereInput[]
    NOT?: DebitCardWhereInput | DebitCardWhereInput[]
    balance?: FloatFilter<"DebitCard"> | number
    createdAt?: DateTimeFilter<"DebitCard"> | Date | string
    updatedAt?: DateTimeFilter<"DebitCard"> | Date | string
    Card?: XOR<CardRelationFilter, CardWhereInput>
  }, "id" | "cardId">

  export type DebitCardOrderByWithAggregationInput = {
    id?: SortOrder
    balance?: SortOrder
    cardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DebitCardCountOrderByAggregateInput
    _avg?: DebitCardAvgOrderByAggregateInput
    _max?: DebitCardMaxOrderByAggregateInput
    _min?: DebitCardMinOrderByAggregateInput
    _sum?: DebitCardSumOrderByAggregateInput
  }

  export type DebitCardScalarWhereWithAggregatesInput = {
    AND?: DebitCardScalarWhereWithAggregatesInput | DebitCardScalarWhereWithAggregatesInput[]
    OR?: DebitCardScalarWhereWithAggregatesInput[]
    NOT?: DebitCardScalarWhereWithAggregatesInput | DebitCardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DebitCard"> | number
    balance?: FloatWithAggregatesFilter<"DebitCard"> | number
    cardId?: IntWithAggregatesFilter<"DebitCard"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DebitCard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DebitCard"> | Date | string
  }

  export type IssuerWhereInput = {
    AND?: IssuerWhereInput | IssuerWhereInput[]
    OR?: IssuerWhereInput[]
    NOT?: IssuerWhereInput | IssuerWhereInput[]
    id?: IntFilter<"Issuer"> | number
    name?: StringFilter<"Issuer"> | string
    color?: StringFilter<"Issuer"> | string
    icon?: StringNullableFilter<"Issuer"> | string | null
    createdAt?: DateTimeFilter<"Issuer"> | Date | string
    updatedAt?: DateTimeFilter<"Issuer"> | Date | string
    Card?: CardListRelationFilter
  }

  export type IssuerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Card?: CardOrderByRelationAggregateInput
  }

  export type IssuerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IssuerWhereInput | IssuerWhereInput[]
    OR?: IssuerWhereInput[]
    NOT?: IssuerWhereInput | IssuerWhereInput[]
    name?: StringFilter<"Issuer"> | string
    color?: StringFilter<"Issuer"> | string
    icon?: StringNullableFilter<"Issuer"> | string | null
    createdAt?: DateTimeFilter<"Issuer"> | Date | string
    updatedAt?: DateTimeFilter<"Issuer"> | Date | string
    Card?: CardListRelationFilter
  }, "id">

  export type IssuerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IssuerCountOrderByAggregateInput
    _avg?: IssuerAvgOrderByAggregateInput
    _max?: IssuerMaxOrderByAggregateInput
    _min?: IssuerMinOrderByAggregateInput
    _sum?: IssuerSumOrderByAggregateInput
  }

  export type IssuerScalarWhereWithAggregatesInput = {
    AND?: IssuerScalarWhereWithAggregatesInput | IssuerScalarWhereWithAggregatesInput[]
    OR?: IssuerScalarWhereWithAggregatesInput[]
    NOT?: IssuerScalarWhereWithAggregatesInput | IssuerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Issuer"> | number
    name?: StringWithAggregatesFilter<"Issuer"> | string
    color?: StringWithAggregatesFilter<"Issuer"> | string
    icon?: StringNullableWithAggregatesFilter<"Issuer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Issuer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Issuer"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: IntFilter<"Transaction"> | number
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    amount?: FloatFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    method?: EnumTransactionMethodFilter<"Transaction"> | $Enums.TransactionMethod
    description?: StringNullableFilter<"Transaction"> | string | null
    cardId?: IntFilter<"Transaction"> | number
    userId?: IntFilter<"Transaction"> | number
    currency?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    Card?: XOR<CardRelationFilter, CardWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    method?: SortOrder
    description?: SortOrderInput | SortOrder
    cardId?: SortOrder
    userId?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Card?: CardOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    amount?: FloatFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    method?: EnumTransactionMethodFilter<"Transaction"> | $Enums.TransactionMethod
    description?: StringNullableFilter<"Transaction"> | string | null
    cardId?: IntFilter<"Transaction"> | number
    userId?: IntFilter<"Transaction"> | number
    currency?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    Card?: XOR<CardRelationFilter, CardWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    method?: SortOrder
    description?: SortOrderInput | SortOrder
    cardId?: SortOrder
    userId?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Transaction"> | number
    type?: EnumTransactionTypeWithAggregatesFilter<"Transaction"> | $Enums.TransactionType
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    method?: EnumTransactionMethodWithAggregatesFilter<"Transaction"> | $Enums.TransactionMethod
    description?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    cardId?: IntWithAggregatesFilter<"Transaction"> | number
    userId?: IntWithAggregatesFilter<"Transaction"> | number
    currency?: StringWithAggregatesFilter<"Transaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    cpf?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Transaction?: TransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cpf?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Transaction?: TransactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cpf?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Transaction?: TransactionListRelationFilter
  }, "id" | "email" | "cpf">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cpf?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    cpf?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CardCreateInput = {
    name: string
    number?: string | null
    expiration?: string | null
    cvv?: string | null
    nickname?: string | null
    cardType?: $Enums.CardType
    createdAt?: Date | string
    updatedAt?: Date | string
    Issuer: IssuerCreateNestedOneWithoutCardInput
    CreditCard?: CreditCardCreateNestedOneWithoutCardInput
    DebitCard?: DebitCardCreateNestedOneWithoutCardInput
    Transaction?: TransactionCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateInput = {
    id?: number
    name: string
    number?: string | null
    expiration?: string | null
    cvv?: string | null
    nickname?: string | null
    issuerId: number
    cardType?: $Enums.CardType
    createdAt?: Date | string
    updatedAt?: Date | string
    CreditCard?: CreditCardUncheckedCreateNestedOneWithoutCardInput
    DebitCard?: DebitCardUncheckedCreateNestedOneWithoutCardInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    expiration?: NullableStringFieldUpdateOperationsInput | string | null
    cvv?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Issuer?: IssuerUpdateOneRequiredWithoutCardNestedInput
    CreditCard?: CreditCardUpdateOneWithoutCardNestedInput
    DebitCard?: DebitCardUpdateOneWithoutCardNestedInput
    Transaction?: TransactionUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    expiration?: NullableStringFieldUpdateOperationsInput | string | null
    cvv?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    issuerId?: IntFieldUpdateOperationsInput | number
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreditCard?: CreditCardUncheckedUpdateOneWithoutCardNestedInput
    DebitCard?: DebitCardUncheckedUpdateOneWithoutCardNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardCreateManyInput = {
    id?: number
    name: string
    number?: string | null
    expiration?: string | null
    cvv?: string | null
    nickname?: string | null
    issuerId: number
    cardType?: $Enums.CardType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CardUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    expiration?: NullableStringFieldUpdateOperationsInput | string | null
    cvv?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    expiration?: NullableStringFieldUpdateOperationsInput | string | null
    cvv?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    issuerId?: IntFieldUpdateOperationsInput | number
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditCardCreateInput = {
    creditLimit: number
    currentCredit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Card: CardCreateNestedOneWithoutCreditCardInput
  }

  export type CreditCardUncheckedCreateInput = {
    id?: number
    creditLimit: number
    currentCredit?: number
    cardId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditCardUpdateInput = {
    creditLimit?: FloatFieldUpdateOperationsInput | number
    currentCredit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Card?: CardUpdateOneRequiredWithoutCreditCardNestedInput
  }

  export type CreditCardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    creditLimit?: FloatFieldUpdateOperationsInput | number
    currentCredit?: FloatFieldUpdateOperationsInput | number
    cardId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditCardCreateManyInput = {
    id?: number
    creditLimit: number
    currentCredit?: number
    cardId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditCardUpdateManyMutationInput = {
    creditLimit?: FloatFieldUpdateOperationsInput | number
    currentCredit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditCardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    creditLimit?: FloatFieldUpdateOperationsInput | number
    currentCredit?: FloatFieldUpdateOperationsInput | number
    cardId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebitCardCreateInput = {
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Card: CardCreateNestedOneWithoutDebitCardInput
  }

  export type DebitCardUncheckedCreateInput = {
    id?: number
    balance?: number
    cardId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebitCardUpdateInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Card?: CardUpdateOneRequiredWithoutDebitCardNestedInput
  }

  export type DebitCardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    cardId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebitCardCreateManyInput = {
    id?: number
    balance?: number
    cardId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebitCardUpdateManyMutationInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebitCardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    cardId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuerCreateInput = {
    name: string
    color: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Card?: CardCreateNestedManyWithoutIssuerInput
  }

  export type IssuerUncheckedCreateInput = {
    id?: number
    name: string
    color: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Card?: CardUncheckedCreateNestedManyWithoutIssuerInput
  }

  export type IssuerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Card?: CardUpdateManyWithoutIssuerNestedInput
  }

  export type IssuerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Card?: CardUncheckedUpdateManyWithoutIssuerNestedInput
  }

  export type IssuerCreateManyInput = {
    id?: number
    name: string
    color: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssuerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    type: $Enums.TransactionType
    amount: number
    date: Date | string
    method: $Enums.TransactionMethod
    description?: string | null
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Card: CardCreateNestedOneWithoutTransactionInput
    User: UserCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: number
    type: $Enums.TransactionType
    amount: number
    date: Date | string
    method: $Enums.TransactionMethod
    description?: string | null
    cardId: number
    userId: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumTransactionMethodFieldUpdateOperationsInput | $Enums.TransactionMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Card?: CardUpdateOneRequiredWithoutTransactionNestedInput
    User?: UserUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumTransactionMethodFieldUpdateOperationsInput | $Enums.TransactionMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cardId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: number
    type: $Enums.TransactionType
    amount: number
    date: Date | string
    method: $Enums.TransactionMethod
    description?: string | null
    cardId: number
    userId: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumTransactionMethodFieldUpdateOperationsInput | $Enums.TransactionMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumTransactionMethodFieldUpdateOperationsInput | $Enums.TransactionMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cardId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    cpf?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Transaction?: TransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    cpf?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    cpf?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumCardTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CardType | EnumCardTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CardType[] | ListEnumCardTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CardType[] | ListEnumCardTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCardTypeFilter<$PrismaModel> | $Enums.CardType
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IssuerRelationFilter = {
    is?: IssuerWhereInput
    isNot?: IssuerWhereInput
  }

  export type CreditCardNullableRelationFilter = {
    is?: CreditCardWhereInput | null
    isNot?: CreditCardWhereInput | null
  }

  export type DebitCardNullableRelationFilter = {
    is?: DebitCardWhereInput | null
    isNot?: DebitCardWhereInput | null
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    expiration?: SortOrder
    cvv?: SortOrder
    nickname?: SortOrder
    issuerId?: SortOrder
    cardType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CardAvgOrderByAggregateInput = {
    id?: SortOrder
    issuerId?: SortOrder
  }

  export type CardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    expiration?: SortOrder
    cvv?: SortOrder
    nickname?: SortOrder
    issuerId?: SortOrder
    cardType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    expiration?: SortOrder
    cvv?: SortOrder
    nickname?: SortOrder
    issuerId?: SortOrder
    cardType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CardSumOrderByAggregateInput = {
    id?: SortOrder
    issuerId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumCardTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CardType | EnumCardTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CardType[] | ListEnumCardTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CardType[] | ListEnumCardTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCardTypeWithAggregatesFilter<$PrismaModel> | $Enums.CardType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCardTypeFilter<$PrismaModel>
    _max?: NestedEnumCardTypeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CardRelationFilter = {
    is?: CardWhereInput
    isNot?: CardWhereInput
  }

  export type CreditCardCountOrderByAggregateInput = {
    id?: SortOrder
    creditLimit?: SortOrder
    currentCredit?: SortOrder
    cardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditCardAvgOrderByAggregateInput = {
    id?: SortOrder
    creditLimit?: SortOrder
    currentCredit?: SortOrder
    cardId?: SortOrder
  }

  export type CreditCardMaxOrderByAggregateInput = {
    id?: SortOrder
    creditLimit?: SortOrder
    currentCredit?: SortOrder
    cardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditCardMinOrderByAggregateInput = {
    id?: SortOrder
    creditLimit?: SortOrder
    currentCredit?: SortOrder
    cardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CreditCardSumOrderByAggregateInput = {
    id?: SortOrder
    creditLimit?: SortOrder
    currentCredit?: SortOrder
    cardId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DebitCardCountOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    cardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DebitCardAvgOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    cardId?: SortOrder
  }

  export type DebitCardMaxOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    cardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DebitCardMinOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    cardId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DebitCardSumOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    cardId?: SortOrder
  }

  export type CardListRelationFilter = {
    every?: CardWhereInput
    some?: CardWhereInput
    none?: CardWhereInput
  }

  export type CardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IssuerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IssuerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IssuerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IssuerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IssuerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type EnumTransactionMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionMethod | EnumTransactionMethodFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionMethod[] | ListEnumTransactionMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionMethod[] | ListEnumTransactionMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionMethodFilter<$PrismaModel> | $Enums.TransactionMethod
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    method?: SortOrder
    description?: SortOrder
    cardId?: SortOrder
    userId?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    cardId?: SortOrder
    userId?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    method?: SortOrder
    description?: SortOrder
    cardId?: SortOrder
    userId?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    method?: SortOrder
    description?: SortOrder
    cardId?: SortOrder
    userId?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    cardId?: SortOrder
    userId?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumTransactionMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionMethod | EnumTransactionMethodFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionMethod[] | ListEnumTransactionMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionMethod[] | ListEnumTransactionMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionMethodWithAggregatesFilter<$PrismaModel> | $Enums.TransactionMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionMethodFilter<$PrismaModel>
    _max?: NestedEnumTransactionMethodFilter<$PrismaModel>
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IssuerCreateNestedOneWithoutCardInput = {
    create?: XOR<IssuerCreateWithoutCardInput, IssuerUncheckedCreateWithoutCardInput>
    connectOrCreate?: IssuerCreateOrConnectWithoutCardInput
    connect?: IssuerWhereUniqueInput
  }

  export type CreditCardCreateNestedOneWithoutCardInput = {
    create?: XOR<CreditCardCreateWithoutCardInput, CreditCardUncheckedCreateWithoutCardInput>
    connectOrCreate?: CreditCardCreateOrConnectWithoutCardInput
    connect?: CreditCardWhereUniqueInput
  }

  export type DebitCardCreateNestedOneWithoutCardInput = {
    create?: XOR<DebitCardCreateWithoutCardInput, DebitCardUncheckedCreateWithoutCardInput>
    connectOrCreate?: DebitCardCreateOrConnectWithoutCardInput
    connect?: DebitCardWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutCardInput = {
    create?: XOR<TransactionCreateWithoutCardInput, TransactionUncheckedCreateWithoutCardInput> | TransactionCreateWithoutCardInput[] | TransactionUncheckedCreateWithoutCardInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCardInput | TransactionCreateOrConnectWithoutCardInput[]
    createMany?: TransactionCreateManyCardInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type CreditCardUncheckedCreateNestedOneWithoutCardInput = {
    create?: XOR<CreditCardCreateWithoutCardInput, CreditCardUncheckedCreateWithoutCardInput>
    connectOrCreate?: CreditCardCreateOrConnectWithoutCardInput
    connect?: CreditCardWhereUniqueInput
  }

  export type DebitCardUncheckedCreateNestedOneWithoutCardInput = {
    create?: XOR<DebitCardCreateWithoutCardInput, DebitCardUncheckedCreateWithoutCardInput>
    connectOrCreate?: DebitCardCreateOrConnectWithoutCardInput
    connect?: DebitCardWhereUniqueInput
  }

  export type TransactionUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<TransactionCreateWithoutCardInput, TransactionUncheckedCreateWithoutCardInput> | TransactionCreateWithoutCardInput[] | TransactionUncheckedCreateWithoutCardInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCardInput | TransactionCreateOrConnectWithoutCardInput[]
    createMany?: TransactionCreateManyCardInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumCardTypeFieldUpdateOperationsInput = {
    set?: $Enums.CardType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IssuerUpdateOneRequiredWithoutCardNestedInput = {
    create?: XOR<IssuerCreateWithoutCardInput, IssuerUncheckedCreateWithoutCardInput>
    connectOrCreate?: IssuerCreateOrConnectWithoutCardInput
    upsert?: IssuerUpsertWithoutCardInput
    connect?: IssuerWhereUniqueInput
    update?: XOR<XOR<IssuerUpdateToOneWithWhereWithoutCardInput, IssuerUpdateWithoutCardInput>, IssuerUncheckedUpdateWithoutCardInput>
  }

  export type CreditCardUpdateOneWithoutCardNestedInput = {
    create?: XOR<CreditCardCreateWithoutCardInput, CreditCardUncheckedCreateWithoutCardInput>
    connectOrCreate?: CreditCardCreateOrConnectWithoutCardInput
    upsert?: CreditCardUpsertWithoutCardInput
    disconnect?: CreditCardWhereInput | boolean
    delete?: CreditCardWhereInput | boolean
    connect?: CreditCardWhereUniqueInput
    update?: XOR<XOR<CreditCardUpdateToOneWithWhereWithoutCardInput, CreditCardUpdateWithoutCardInput>, CreditCardUncheckedUpdateWithoutCardInput>
  }

  export type DebitCardUpdateOneWithoutCardNestedInput = {
    create?: XOR<DebitCardCreateWithoutCardInput, DebitCardUncheckedCreateWithoutCardInput>
    connectOrCreate?: DebitCardCreateOrConnectWithoutCardInput
    upsert?: DebitCardUpsertWithoutCardInput
    disconnect?: DebitCardWhereInput | boolean
    delete?: DebitCardWhereInput | boolean
    connect?: DebitCardWhereUniqueInput
    update?: XOR<XOR<DebitCardUpdateToOneWithWhereWithoutCardInput, DebitCardUpdateWithoutCardInput>, DebitCardUncheckedUpdateWithoutCardInput>
  }

  export type TransactionUpdateManyWithoutCardNestedInput = {
    create?: XOR<TransactionCreateWithoutCardInput, TransactionUncheckedCreateWithoutCardInput> | TransactionCreateWithoutCardInput[] | TransactionUncheckedCreateWithoutCardInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCardInput | TransactionCreateOrConnectWithoutCardInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCardInput | TransactionUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: TransactionCreateManyCardInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCardInput | TransactionUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCardInput | TransactionUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CreditCardUncheckedUpdateOneWithoutCardNestedInput = {
    create?: XOR<CreditCardCreateWithoutCardInput, CreditCardUncheckedCreateWithoutCardInput>
    connectOrCreate?: CreditCardCreateOrConnectWithoutCardInput
    upsert?: CreditCardUpsertWithoutCardInput
    disconnect?: CreditCardWhereInput | boolean
    delete?: CreditCardWhereInput | boolean
    connect?: CreditCardWhereUniqueInput
    update?: XOR<XOR<CreditCardUpdateToOneWithWhereWithoutCardInput, CreditCardUpdateWithoutCardInput>, CreditCardUncheckedUpdateWithoutCardInput>
  }

  export type DebitCardUncheckedUpdateOneWithoutCardNestedInput = {
    create?: XOR<DebitCardCreateWithoutCardInput, DebitCardUncheckedCreateWithoutCardInput>
    connectOrCreate?: DebitCardCreateOrConnectWithoutCardInput
    upsert?: DebitCardUpsertWithoutCardInput
    disconnect?: DebitCardWhereInput | boolean
    delete?: DebitCardWhereInput | boolean
    connect?: DebitCardWhereUniqueInput
    update?: XOR<XOR<DebitCardUpdateToOneWithWhereWithoutCardInput, DebitCardUpdateWithoutCardInput>, DebitCardUncheckedUpdateWithoutCardInput>
  }

  export type TransactionUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<TransactionCreateWithoutCardInput, TransactionUncheckedCreateWithoutCardInput> | TransactionCreateWithoutCardInput[] | TransactionUncheckedCreateWithoutCardInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutCardInput | TransactionCreateOrConnectWithoutCardInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutCardInput | TransactionUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: TransactionCreateManyCardInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutCardInput | TransactionUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutCardInput | TransactionUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type CardCreateNestedOneWithoutCreditCardInput = {
    create?: XOR<CardCreateWithoutCreditCardInput, CardUncheckedCreateWithoutCreditCardInput>
    connectOrCreate?: CardCreateOrConnectWithoutCreditCardInput
    connect?: CardWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CardUpdateOneRequiredWithoutCreditCardNestedInput = {
    create?: XOR<CardCreateWithoutCreditCardInput, CardUncheckedCreateWithoutCreditCardInput>
    connectOrCreate?: CardCreateOrConnectWithoutCreditCardInput
    upsert?: CardUpsertWithoutCreditCardInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutCreditCardInput, CardUpdateWithoutCreditCardInput>, CardUncheckedUpdateWithoutCreditCardInput>
  }

  export type CardCreateNestedOneWithoutDebitCardInput = {
    create?: XOR<CardCreateWithoutDebitCardInput, CardUncheckedCreateWithoutDebitCardInput>
    connectOrCreate?: CardCreateOrConnectWithoutDebitCardInput
    connect?: CardWhereUniqueInput
  }

  export type CardUpdateOneRequiredWithoutDebitCardNestedInput = {
    create?: XOR<CardCreateWithoutDebitCardInput, CardUncheckedCreateWithoutDebitCardInput>
    connectOrCreate?: CardCreateOrConnectWithoutDebitCardInput
    upsert?: CardUpsertWithoutDebitCardInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutDebitCardInput, CardUpdateWithoutDebitCardInput>, CardUncheckedUpdateWithoutDebitCardInput>
  }

  export type CardCreateNestedManyWithoutIssuerInput = {
    create?: XOR<CardCreateWithoutIssuerInput, CardUncheckedCreateWithoutIssuerInput> | CardCreateWithoutIssuerInput[] | CardUncheckedCreateWithoutIssuerInput[]
    connectOrCreate?: CardCreateOrConnectWithoutIssuerInput | CardCreateOrConnectWithoutIssuerInput[]
    createMany?: CardCreateManyIssuerInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type CardUncheckedCreateNestedManyWithoutIssuerInput = {
    create?: XOR<CardCreateWithoutIssuerInput, CardUncheckedCreateWithoutIssuerInput> | CardCreateWithoutIssuerInput[] | CardUncheckedCreateWithoutIssuerInput[]
    connectOrCreate?: CardCreateOrConnectWithoutIssuerInput | CardCreateOrConnectWithoutIssuerInput[]
    createMany?: CardCreateManyIssuerInputEnvelope
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
  }

  export type CardUpdateManyWithoutIssuerNestedInput = {
    create?: XOR<CardCreateWithoutIssuerInput, CardUncheckedCreateWithoutIssuerInput> | CardCreateWithoutIssuerInput[] | CardUncheckedCreateWithoutIssuerInput[]
    connectOrCreate?: CardCreateOrConnectWithoutIssuerInput | CardCreateOrConnectWithoutIssuerInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutIssuerInput | CardUpsertWithWhereUniqueWithoutIssuerInput[]
    createMany?: CardCreateManyIssuerInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutIssuerInput | CardUpdateWithWhereUniqueWithoutIssuerInput[]
    updateMany?: CardUpdateManyWithWhereWithoutIssuerInput | CardUpdateManyWithWhereWithoutIssuerInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type CardUncheckedUpdateManyWithoutIssuerNestedInput = {
    create?: XOR<CardCreateWithoutIssuerInput, CardUncheckedCreateWithoutIssuerInput> | CardCreateWithoutIssuerInput[] | CardUncheckedCreateWithoutIssuerInput[]
    connectOrCreate?: CardCreateOrConnectWithoutIssuerInput | CardCreateOrConnectWithoutIssuerInput[]
    upsert?: CardUpsertWithWhereUniqueWithoutIssuerInput | CardUpsertWithWhereUniqueWithoutIssuerInput[]
    createMany?: CardCreateManyIssuerInputEnvelope
    set?: CardWhereUniqueInput | CardWhereUniqueInput[]
    disconnect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    delete?: CardWhereUniqueInput | CardWhereUniqueInput[]
    connect?: CardWhereUniqueInput | CardWhereUniqueInput[]
    update?: CardUpdateWithWhereUniqueWithoutIssuerInput | CardUpdateWithWhereUniqueWithoutIssuerInput[]
    updateMany?: CardUpdateManyWithWhereWithoutIssuerInput | CardUpdateManyWithWhereWithoutIssuerInput[]
    deleteMany?: CardScalarWhereInput | CardScalarWhereInput[]
  }

  export type CardCreateNestedOneWithoutTransactionInput = {
    create?: XOR<CardCreateWithoutTransactionInput, CardUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: CardCreateOrConnectWithoutTransactionInput
    connect?: CardWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTransactionInput = {
    create?: XOR<UserCreateWithoutTransactionInput, UserUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type EnumTransactionMethodFieldUpdateOperationsInput = {
    set?: $Enums.TransactionMethod
  }

  export type CardUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<CardCreateWithoutTransactionInput, CardUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: CardCreateOrConnectWithoutTransactionInput
    upsert?: CardUpsertWithoutTransactionInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutTransactionInput, CardUpdateWithoutTransactionInput>, CardUncheckedUpdateWithoutTransactionInput>
  }

  export type UserUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<UserCreateWithoutTransactionInput, UserUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionInput
    upsert?: UserUpsertWithoutTransactionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionInput, UserUpdateWithoutTransactionInput>, UserUncheckedUpdateWithoutTransactionInput>
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumCardTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CardType | EnumCardTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CardType[] | ListEnumCardTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CardType[] | ListEnumCardTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCardTypeFilter<$PrismaModel> | $Enums.CardType
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCardTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CardType | EnumCardTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CardType[] | ListEnumCardTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CardType[] | ListEnumCardTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCardTypeWithAggregatesFilter<$PrismaModel> | $Enums.CardType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCardTypeFilter<$PrismaModel>
    _max?: NestedEnumCardTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionMethod | EnumTransactionMethodFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionMethod[] | ListEnumTransactionMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionMethod[] | ListEnumTransactionMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionMethodFilter<$PrismaModel> | $Enums.TransactionMethod
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionMethod | EnumTransactionMethodFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionMethod[] | ListEnumTransactionMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionMethod[] | ListEnumTransactionMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionMethodWithAggregatesFilter<$PrismaModel> | $Enums.TransactionMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionMethodFilter<$PrismaModel>
    _max?: NestedEnumTransactionMethodFilter<$PrismaModel>
  }

  export type IssuerCreateWithoutCardInput = {
    name: string
    color: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssuerUncheckedCreateWithoutCardInput = {
    id?: number
    name: string
    color: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssuerCreateOrConnectWithoutCardInput = {
    where: IssuerWhereUniqueInput
    create: XOR<IssuerCreateWithoutCardInput, IssuerUncheckedCreateWithoutCardInput>
  }

  export type CreditCardCreateWithoutCardInput = {
    creditLimit: number
    currentCredit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditCardUncheckedCreateWithoutCardInput = {
    id?: number
    creditLimit: number
    currentCredit?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CreditCardCreateOrConnectWithoutCardInput = {
    where: CreditCardWhereUniqueInput
    create: XOR<CreditCardCreateWithoutCardInput, CreditCardUncheckedCreateWithoutCardInput>
  }

  export type DebitCardCreateWithoutCardInput = {
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebitCardUncheckedCreateWithoutCardInput = {
    id?: number
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DebitCardCreateOrConnectWithoutCardInput = {
    where: DebitCardWhereUniqueInput
    create: XOR<DebitCardCreateWithoutCardInput, DebitCardUncheckedCreateWithoutCardInput>
  }

  export type TransactionCreateWithoutCardInput = {
    type: $Enums.TransactionType
    amount: number
    date: Date | string
    method: $Enums.TransactionMethod
    description?: string | null
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutCardInput = {
    id?: number
    type: $Enums.TransactionType
    amount: number
    date: Date | string
    method: $Enums.TransactionMethod
    description?: string | null
    userId: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutCardInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutCardInput, TransactionUncheckedCreateWithoutCardInput>
  }

  export type TransactionCreateManyCardInputEnvelope = {
    data: TransactionCreateManyCardInput | TransactionCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type IssuerUpsertWithoutCardInput = {
    update: XOR<IssuerUpdateWithoutCardInput, IssuerUncheckedUpdateWithoutCardInput>
    create: XOR<IssuerCreateWithoutCardInput, IssuerUncheckedCreateWithoutCardInput>
    where?: IssuerWhereInput
  }

  export type IssuerUpdateToOneWithWhereWithoutCardInput = {
    where?: IssuerWhereInput
    data: XOR<IssuerUpdateWithoutCardInput, IssuerUncheckedUpdateWithoutCardInput>
  }

  export type IssuerUpdateWithoutCardInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssuerUncheckedUpdateWithoutCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditCardUpsertWithoutCardInput = {
    update: XOR<CreditCardUpdateWithoutCardInput, CreditCardUncheckedUpdateWithoutCardInput>
    create: XOR<CreditCardCreateWithoutCardInput, CreditCardUncheckedCreateWithoutCardInput>
    where?: CreditCardWhereInput
  }

  export type CreditCardUpdateToOneWithWhereWithoutCardInput = {
    where?: CreditCardWhereInput
    data: XOR<CreditCardUpdateWithoutCardInput, CreditCardUncheckedUpdateWithoutCardInput>
  }

  export type CreditCardUpdateWithoutCardInput = {
    creditLimit?: FloatFieldUpdateOperationsInput | number
    currentCredit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditCardUncheckedUpdateWithoutCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    creditLimit?: FloatFieldUpdateOperationsInput | number
    currentCredit?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebitCardUpsertWithoutCardInput = {
    update: XOR<DebitCardUpdateWithoutCardInput, DebitCardUncheckedUpdateWithoutCardInput>
    create: XOR<DebitCardCreateWithoutCardInput, DebitCardUncheckedCreateWithoutCardInput>
    where?: DebitCardWhereInput
  }

  export type DebitCardUpdateToOneWithWhereWithoutCardInput = {
    where?: DebitCardWhereInput
    data: XOR<DebitCardUpdateWithoutCardInput, DebitCardUncheckedUpdateWithoutCardInput>
  }

  export type DebitCardUpdateWithoutCardInput = {
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DebitCardUncheckedUpdateWithoutCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutCardInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutCardInput, TransactionUncheckedUpdateWithoutCardInput>
    create: XOR<TransactionCreateWithoutCardInput, TransactionUncheckedCreateWithoutCardInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutCardInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutCardInput, TransactionUncheckedUpdateWithoutCardInput>
  }

  export type TransactionUpdateManyWithWhereWithoutCardInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutCardInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: IntFilter<"Transaction"> | number
    type?: EnumTransactionTypeFilter<"Transaction"> | $Enums.TransactionType
    amount?: FloatFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    method?: EnumTransactionMethodFilter<"Transaction"> | $Enums.TransactionMethod
    description?: StringNullableFilter<"Transaction"> | string | null
    cardId?: IntFilter<"Transaction"> | number
    userId?: IntFilter<"Transaction"> | number
    currency?: StringFilter<"Transaction"> | string
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type CardCreateWithoutCreditCardInput = {
    name: string
    number?: string | null
    expiration?: string | null
    cvv?: string | null
    nickname?: string | null
    cardType?: $Enums.CardType
    createdAt?: Date | string
    updatedAt?: Date | string
    Issuer: IssuerCreateNestedOneWithoutCardInput
    DebitCard?: DebitCardCreateNestedOneWithoutCardInput
    Transaction?: TransactionCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutCreditCardInput = {
    id?: number
    name: string
    number?: string | null
    expiration?: string | null
    cvv?: string | null
    nickname?: string | null
    issuerId: number
    cardType?: $Enums.CardType
    createdAt?: Date | string
    updatedAt?: Date | string
    DebitCard?: DebitCardUncheckedCreateNestedOneWithoutCardInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutCreditCardInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutCreditCardInput, CardUncheckedCreateWithoutCreditCardInput>
  }

  export type CardUpsertWithoutCreditCardInput = {
    update: XOR<CardUpdateWithoutCreditCardInput, CardUncheckedUpdateWithoutCreditCardInput>
    create: XOR<CardCreateWithoutCreditCardInput, CardUncheckedCreateWithoutCreditCardInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutCreditCardInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutCreditCardInput, CardUncheckedUpdateWithoutCreditCardInput>
  }

  export type CardUpdateWithoutCreditCardInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    expiration?: NullableStringFieldUpdateOperationsInput | string | null
    cvv?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Issuer?: IssuerUpdateOneRequiredWithoutCardNestedInput
    DebitCard?: DebitCardUpdateOneWithoutCardNestedInput
    Transaction?: TransactionUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutCreditCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    expiration?: NullableStringFieldUpdateOperationsInput | string | null
    cvv?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    issuerId?: IntFieldUpdateOperationsInput | number
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DebitCard?: DebitCardUncheckedUpdateOneWithoutCardNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardCreateWithoutDebitCardInput = {
    name: string
    number?: string | null
    expiration?: string | null
    cvv?: string | null
    nickname?: string | null
    cardType?: $Enums.CardType
    createdAt?: Date | string
    updatedAt?: Date | string
    Issuer: IssuerCreateNestedOneWithoutCardInput
    CreditCard?: CreditCardCreateNestedOneWithoutCardInput
    Transaction?: TransactionCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutDebitCardInput = {
    id?: number
    name: string
    number?: string | null
    expiration?: string | null
    cvv?: string | null
    nickname?: string | null
    issuerId: number
    cardType?: $Enums.CardType
    createdAt?: Date | string
    updatedAt?: Date | string
    CreditCard?: CreditCardUncheckedCreateNestedOneWithoutCardInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutDebitCardInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutDebitCardInput, CardUncheckedCreateWithoutDebitCardInput>
  }

  export type CardUpsertWithoutDebitCardInput = {
    update: XOR<CardUpdateWithoutDebitCardInput, CardUncheckedUpdateWithoutDebitCardInput>
    create: XOR<CardCreateWithoutDebitCardInput, CardUncheckedCreateWithoutDebitCardInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutDebitCardInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutDebitCardInput, CardUncheckedUpdateWithoutDebitCardInput>
  }

  export type CardUpdateWithoutDebitCardInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    expiration?: NullableStringFieldUpdateOperationsInput | string | null
    cvv?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Issuer?: IssuerUpdateOneRequiredWithoutCardNestedInput
    CreditCard?: CreditCardUpdateOneWithoutCardNestedInput
    Transaction?: TransactionUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutDebitCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    expiration?: NullableStringFieldUpdateOperationsInput | string | null
    cvv?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    issuerId?: IntFieldUpdateOperationsInput | number
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreditCard?: CreditCardUncheckedUpdateOneWithoutCardNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardCreateWithoutIssuerInput = {
    name: string
    number?: string | null
    expiration?: string | null
    cvv?: string | null
    nickname?: string | null
    cardType?: $Enums.CardType
    createdAt?: Date | string
    updatedAt?: Date | string
    CreditCard?: CreditCardCreateNestedOneWithoutCardInput
    DebitCard?: DebitCardCreateNestedOneWithoutCardInput
    Transaction?: TransactionCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateWithoutIssuerInput = {
    id?: number
    name: string
    number?: string | null
    expiration?: string | null
    cvv?: string | null
    nickname?: string | null
    cardType?: $Enums.CardType
    createdAt?: Date | string
    updatedAt?: Date | string
    CreditCard?: CreditCardUncheckedCreateNestedOneWithoutCardInput
    DebitCard?: DebitCardUncheckedCreateNestedOneWithoutCardInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardCreateOrConnectWithoutIssuerInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutIssuerInput, CardUncheckedCreateWithoutIssuerInput>
  }

  export type CardCreateManyIssuerInputEnvelope = {
    data: CardCreateManyIssuerInput | CardCreateManyIssuerInput[]
    skipDuplicates?: boolean
  }

  export type CardUpsertWithWhereUniqueWithoutIssuerInput = {
    where: CardWhereUniqueInput
    update: XOR<CardUpdateWithoutIssuerInput, CardUncheckedUpdateWithoutIssuerInput>
    create: XOR<CardCreateWithoutIssuerInput, CardUncheckedCreateWithoutIssuerInput>
  }

  export type CardUpdateWithWhereUniqueWithoutIssuerInput = {
    where: CardWhereUniqueInput
    data: XOR<CardUpdateWithoutIssuerInput, CardUncheckedUpdateWithoutIssuerInput>
  }

  export type CardUpdateManyWithWhereWithoutIssuerInput = {
    where: CardScalarWhereInput
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyWithoutIssuerInput>
  }

  export type CardScalarWhereInput = {
    AND?: CardScalarWhereInput | CardScalarWhereInput[]
    OR?: CardScalarWhereInput[]
    NOT?: CardScalarWhereInput | CardScalarWhereInput[]
    id?: IntFilter<"Card"> | number
    name?: StringFilter<"Card"> | string
    number?: StringNullableFilter<"Card"> | string | null
    expiration?: StringNullableFilter<"Card"> | string | null
    cvv?: StringNullableFilter<"Card"> | string | null
    nickname?: StringNullableFilter<"Card"> | string | null
    issuerId?: IntFilter<"Card"> | number
    cardType?: EnumCardTypeFilter<"Card"> | $Enums.CardType
    createdAt?: DateTimeFilter<"Card"> | Date | string
    updatedAt?: DateTimeFilter<"Card"> | Date | string
  }

  export type CardCreateWithoutTransactionInput = {
    name: string
    number?: string | null
    expiration?: string | null
    cvv?: string | null
    nickname?: string | null
    cardType?: $Enums.CardType
    createdAt?: Date | string
    updatedAt?: Date | string
    Issuer: IssuerCreateNestedOneWithoutCardInput
    CreditCard?: CreditCardCreateNestedOneWithoutCardInput
    DebitCard?: DebitCardCreateNestedOneWithoutCardInput
  }

  export type CardUncheckedCreateWithoutTransactionInput = {
    id?: number
    name: string
    number?: string | null
    expiration?: string | null
    cvv?: string | null
    nickname?: string | null
    issuerId: number
    cardType?: $Enums.CardType
    createdAt?: Date | string
    updatedAt?: Date | string
    CreditCard?: CreditCardUncheckedCreateNestedOneWithoutCardInput
    DebitCard?: DebitCardUncheckedCreateNestedOneWithoutCardInput
  }

  export type CardCreateOrConnectWithoutTransactionInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutTransactionInput, CardUncheckedCreateWithoutTransactionInput>
  }

  export type UserCreateWithoutTransactionInput = {
    name: string
    email: string
    cpf?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutTransactionInput = {
    id?: number
    name: string
    email: string
    cpf?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutTransactionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionInput, UserUncheckedCreateWithoutTransactionInput>
  }

  export type CardUpsertWithoutTransactionInput = {
    update: XOR<CardUpdateWithoutTransactionInput, CardUncheckedUpdateWithoutTransactionInput>
    create: XOR<CardCreateWithoutTransactionInput, CardUncheckedCreateWithoutTransactionInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutTransactionInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutTransactionInput, CardUncheckedUpdateWithoutTransactionInput>
  }

  export type CardUpdateWithoutTransactionInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    expiration?: NullableStringFieldUpdateOperationsInput | string | null
    cvv?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Issuer?: IssuerUpdateOneRequiredWithoutCardNestedInput
    CreditCard?: CreditCardUpdateOneWithoutCardNestedInput
    DebitCard?: DebitCardUpdateOneWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    expiration?: NullableStringFieldUpdateOperationsInput | string | null
    cvv?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    issuerId?: IntFieldUpdateOperationsInput | number
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreditCard?: CreditCardUncheckedUpdateOneWithoutCardNestedInput
    DebitCard?: DebitCardUncheckedUpdateOneWithoutCardNestedInput
  }

  export type UserUpsertWithoutTransactionInput = {
    update: XOR<UserUpdateWithoutTransactionInput, UserUncheckedUpdateWithoutTransactionInput>
    create: XOR<UserCreateWithoutTransactionInput, UserUncheckedCreateWithoutTransactionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionInput, UserUncheckedUpdateWithoutTransactionInput>
  }

  export type UserUpdateWithoutTransactionInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutTransactionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateWithoutUserInput = {
    type: $Enums.TransactionType
    amount: number
    date: Date | string
    method: $Enums.TransactionMethod
    description?: string | null
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Card: CardCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: number
    type: $Enums.TransactionType
    amount: number
    date: Date | string
    method: $Enums.TransactionMethod
    description?: string | null
    cardId: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionCreateManyCardInput = {
    id?: number
    type: $Enums.TransactionType
    amount: number
    date: Date | string
    method: $Enums.TransactionMethod
    description?: string | null
    userId: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutCardInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumTransactionMethodFieldUpdateOperationsInput | $Enums.TransactionMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumTransactionMethodFieldUpdateOperationsInput | $Enums.TransactionMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutCardInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumTransactionMethodFieldUpdateOperationsInput | $Enums.TransactionMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CardCreateManyIssuerInput = {
    id?: number
    name: string
    number?: string | null
    expiration?: string | null
    cvv?: string | null
    nickname?: string | null
    cardType?: $Enums.CardType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CardUpdateWithoutIssuerInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    expiration?: NullableStringFieldUpdateOperationsInput | string | null
    cvv?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreditCard?: CreditCardUpdateOneWithoutCardNestedInput
    DebitCard?: DebitCardUpdateOneWithoutCardNestedInput
    Transaction?: TransactionUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateWithoutIssuerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    expiration?: NullableStringFieldUpdateOperationsInput | string | null
    cvv?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CreditCard?: CreditCardUncheckedUpdateOneWithoutCardNestedInput
    DebitCard?: DebitCardUncheckedUpdateOneWithoutCardNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateManyWithoutIssuerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableStringFieldUpdateOperationsInput | string | null
    expiration?: NullableStringFieldUpdateOperationsInput | string | null
    cvv?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    cardType?: EnumCardTypeFieldUpdateOperationsInput | $Enums.CardType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyUserInput = {
    id?: number
    type: $Enums.TransactionType
    amount: number
    date: Date | string
    method: $Enums.TransactionMethod
    description?: string | null
    cardId: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumTransactionMethodFieldUpdateOperationsInput | $Enums.TransactionMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Card?: CardUpdateOneRequiredWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumTransactionMethodFieldUpdateOperationsInput | $Enums.TransactionMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cardId?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    method?: EnumTransactionMethodFieldUpdateOperationsInput | $Enums.TransactionMethod
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cardId?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CardCountOutputTypeDefaultArgs instead
     */
    export type CardCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CardCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IssuerCountOutputTypeDefaultArgs instead
     */
    export type IssuerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IssuerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CardDefaultArgs instead
     */
    export type CardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CardDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CreditCardDefaultArgs instead
     */
    export type CreditCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CreditCardDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DebitCardDefaultArgs instead
     */
    export type DebitCardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DebitCardDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IssuerDefaultArgs instead
     */
    export type IssuerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = IssuerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionDefaultArgs instead
     */
    export type TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}