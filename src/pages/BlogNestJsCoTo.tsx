import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest NestJS i dlaczego jest popularny w ekosystemie Node.js?",
    answer: "NestJS: progresywny framework Node.js (Kamil Mysliwiec, 2017). TypeScript first. Inspirowany Angular (dekoratory, DI, moduły). Nadbudowany nad Express lub Fastify. Filozofia: struktura, skalowanie, enterprise-ready. Kluczowe koncepty: Moduły (@Module): grupują powiązane feature. imports, exports, providers, controllers. Kontrolery (@Controller): obsługa HTTP requestów. @Get, @Post, @Put, @Delete, @Patch. @Param, @Body, @Query — dekoratory. Providerzy (@Injectable): services, repositories, factories. Wstrzykiwane przez DI container. Pipes: transformacja i walidacja danych wejściowych. ValidationPipe (class-validator integracja). ParseIntPipe, ParseUUIDPipe. Guards: autoryzacja (czy ma dostęp). AuthGuard, RolesGuard. Interceptors: cross-cutting concerns. Logging, transformacja response, cache. Middleware: Express-compatible. Exception Filters: obsługa błędów. HttpExceptionFilter. DTOs z class-validator: @IsEmail() email: string. @IsString() @MinLength(8) password: string. Automatyczna walidacja z ValidationPipe. NestJS CLI: nest generate module users. nest generate controller users. nest generate service users. Hot reload, compilation. Baza danych: @nestjs/typeorm, @nestjs/prisma (TypeORM lub Prisma). Mikro-serwisy: @nestjs/microservices. Transport: TCP, Redis, RabbitMQ, Kafka, gRPC. Event patterns.",
  },
  {
    question: "NestJS Guards, Interceptors i Exception Filters — wzorce cross-cutting?",
    answer: "Guards (@UseGuards): boolean — czy request przejść dalej. canActivate(context: ExecutionContext): boolean | Promise. AuthGuard('jwt') — Passport.js integration. @UseGuards(JwtAuthGuard, RolesGuard) — stack guards. Implementacja: @Injectable(). implements CanActivate. canActivate(context) {const request = context.switchToHttp().getRequest(). return validateUser(request)}. RBAC z dekoratorem: @Roles('admin'). @SetMetadata('roles', roles). Reflector.get() w guard. Interceptors (@UseInterceptors): przed i po obsłudze requesta. Transformacja response. Logging. Cache. Timeout. Implementacja: implements NestInterceptor. intercept(context, next: CallHandler) {return next.handle().pipe(map(data => transform(data)))}. TransformInterceptor — opakuj response. LoggingInterceptor — loguj każdy request. TimeoutInterceptor — throw po 5 sekundach. Exception Filters (@Catch): obsługa błędów globalnie lub per endpoint. @Catch(HttpException). catch(exception, host: ArgumentsHost). implements ExceptionFilter. Globalna rejestracja: app.useGlobalFilters(new HttpExceptionFilter()). Moduł-level: @Module({providers: [{provide: APP_FILTER, useClass: HttpExceptionFilter}]}). Pipes (@UsePipes): transformacja i walidacja. ValidationPipe — class-validator + class-transformer. ParseIntPipe — string -> number. Custom: implements PipeTransform. transform(value, metadata): PipeTransform. Kolejność wykonania: Middleware -> Guard -> Interceptor (before) -> Pipe -> Controller -> Interceptor (after) -> Exception Filter.",
  },
  {
    question: "NestJS z bazą danych — TypeORM, Prisma i pattern Repository?",
    answer: "TypeORM z NestJS: @nestjs/typeorm. TypeOrmModule.forRoot(config) w AppModule. @Entity('users') class User. @Column() email: string. @InjectRepository(User) userRepository: Repository. CRUD: userRepository.find(), findOne(), save(), delete(). Relacje: @OneToMany, @ManyToOne, @ManyToMany. Prisma z NestJS: @nestjs/prisma lub własny serwis. PrismaService: Injectable, OnModuleInit, OnModuleDestroy. this.prisma.$connect(), $disconnect(). Wstrzyknij do UserService. prisma.user.findMany(), create(), update(), delete(). Zalecane: Prisma preferowany nad TypeORM (lepsza DX). Repository Pattern: oddzielenie logiki DB od logiki biznesowej. UserRepository: @Injectable(). findById(id). findByEmail(email). save(user). UserService: wstrzykuje UserRepository. Logika biznesowa. Brak bezpośredniego DB access. Transaction management: TypeORM: queryRunner.startTransaction(). Prisma: prisma.$transaction([...]). NestJS Transaction Interceptor (własny). Data Mapper vs Active Record: TypeORM obsługuje oba. Nest + Prisma = Data Mapper domyślnie. CQRS w NestJS: @nestjs/cqrs. Commands (zapis) + Queries (odczyt). CommandBus.execute(), QueryBus.execute(). EventBus.publish(). Event sourcing integration. Seeding: DatabaseSeeder z TypeORM. Prisma seed script (prisma/seed.ts). Faker.js dla test data.",
  },
  {
    question: "NestJS WebSocket, microservices i GraphQL?",
    answer: "NestJS WebSocket: @nestjs/websockets. @WebSocketGateway(port). @SubscribeMessage('message'). @MessageBody(). Emitowanie: this.server.emit('message', data). Rooms: socket.join(room). Client: this.server.to(room).emit(). Adaptery: Socket.io (domyślny), ws (lightweight). NestJS Microservices: @nestjs/microservices. Transports: TCP, Redis (Pub/Sub), RabbitMQ, Kafka, gRPC, MQTT, NATS. Pattern: message-based (request-response), event-based (fire-and-forget). ClientsModule.register([{name: 'MATH_SERVICE', transport: Transport.TCP}]). @Client() mathClient. this.mathClient.send({cmd: 'sum'}, [1,2,3]). Event: this.mathClient.emit('user_created', user). NestJS GraphQL: @nestjs/graphql + @nestjs/apollo lub @nestjs/mercurius. Code-first (TypeScript classes -> schema) lub schema-first (SDL -> classes). @Resolver(() => User). @Query(() => [User]) findAll(). @Mutation(() => User) createUser(@Args() dto). @ResolveField(() => [Post]) posts(@Parent() user: User). DataLoader pattern — N+1 problem. nestjs-dataloader. Subscription: @Subscription(() => User). Swaggerr (OpenAPI): @nestjs/swagger. @ApiProperty() na DTOs. SwaggerModule.setup('/api', app, document). Auto-generuje dokumentację API. Kolejność dekoratorów na endpoint: @Get(':id') @UseGuards(JwtAuthGuard) @UseInterceptors(LoggingInterceptor) @UsePipes(ValidationPipe) async findOne(@Param('id') id: string).",
  },
  {
    question: "NestJS vs Express vs Fastify vs Hono — kiedy wybrać NestJS?",
    answer: "Express: minimalistyczny (2010). Niestrukturyzowany. JavaScript first. Ogromny ekosystem. Dowolna struktura. Brak opinii. Fastify: szybszy niż Express (JSON serialization, schema validation). Plugin system (hooks, decorators). TypeScript support. Schema-based validation. Hono: ultra-lightweight (2022). Edge-ready (Cloudflare Workers, Deno). 14KB. Minimalistyczny API. Web standards (Request/Response). Bardzo szybki. NestJS: pełny framework. Opinionated (strukturyzowany). TypeScript mandatory. DI container. Moduły. Dekoratory. Angular-like. Wolniejszy booting niż Fastify/Express (DI overhead). Kiedy NestJS: duże enterprise projekty. Zespoły z Angular/Spring background. Potrzebujesz struktury i konwencji. Mikroserwisy (wbudowany support). Bogatszy ekosystem (@nestjs/*). Kiedy Fastify: performance krytyczny. Prostszy projekt. Nie potrzebujesz DI. Kiedy Hono: edge computing. Bun/Deno runtime. Ultra-lightweight API. Cloudflare Workers. Kiedy Express: legacy. Maximum flexibility. Tiny projekty. Kiedy tRPC: type-safe, bez REST, Next.js. NestJS + Fastify: NestJS może używać Fastify pod spodem. FastifyAdapter zamiast ExpressAdapter. Lepszy performance. NestJS learning curve: wysoka (dekoratory, DI, pipes, guards, filters, modules). Warte dla dużych projektów.",
  },
];

const nestjsComponents = [
  { komponent: "Modules (@Module)", rola: "Organizacja i enkapsulacja features", przyklad: "UsersModule, AuthModule, DatabaseModule", scope: "Aplikacja / Feature" },
  { komponent: "Controllers (@Controller)", rola: "Obsługa HTTP requestów", przyklad: "@Get('/users') @Post('/users')", scope: "HTTP Layer" },
  { komponent: "Services (@Injectable)", rola: "Logika biznesowa i DI", przyklad: "UserService, AuthService", scope: "Business Logic" },
  { komponent: "Guards (@UseGuards)", rola: "Autoryzacja i kontrola dostępu", przyklad: "JwtAuthGuard, RolesGuard", scope: "Security" },
  { komponent: "Interceptors", rola: "Transformacja requesta/response", przyklad: "LoggingInterceptor, CacheInterceptor", scope: "Cross-cutting" },
  { komponent: "Pipes (@UsePipes)", rola: "Walidacja i transformacja danych", przyklad: "ValidationPipe, ParseIntPipe", scope: "Input Validation" },
];

export default function BlogNestJsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="NestJS | Fotz Studio"
        description="NestJS: TypeScript framework Node.js — moduły, kontrolery, guards, interceptors, pipes, mikrousługi, GraphQL, TypeORM i kiedy wybrać NestJS vs…"
        canonicalUrl="https://fotz.pl/blog/nestjs-co-to-jest-moduly-guardy-mikrouslugi-vs-express-fastify"

        keywords="NestJS co to jest, NestJS definicja, czym jest NestJS, NestJS przykłady, jak działa NestJS, NestJS znaczenie, NestJS przewodnik"

        canonical="https://fotz.pl/blog/nestjs-co-to-jest-moduly-guardy-mikrouslugi-vs-express-fastify"
      />
      <ArticleSchema
        title="NestJS — co to jest, moduły, guardy, mikrousługi, vs Express i Fastify?"
        description="NestJS: 6 komponentów (Module/Controller/Service/Guard/Interceptor/Pipe) — DI, TypeORM/Prisma, WebSocket, microservices, GraphQL i kiedy wybrać NestJS."
        url="https://fotz.pl/blog/nestjs-co-to-jest-moduly-guardy-mikrouslugi-vs-express-fastify"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "NestJS", url: "https://fotz.pl/blog/nestjs-co-to-jest-moduly-guardy-mikrouslugi-vs-express-fastify" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-red-950 to-pink-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "NestJS", href: "/blog/nestjs-co-to-jest-moduly-guardy-mikrouslugi-vs-express-fastify" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-red-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Node.js / Backend
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NestJS Framework
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Progresywny framework Node.js z TypeScript — DI, moduły, Guards, Interceptors,
              mikrousługi przez RabbitMQ/Kafka i GraphQL API.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "DI Container", value: "Injectable" },
                { label: "Autoryzacja", value: "Guards" },
                { label: "AOP", value: "Interceptors" },
                { label: "Walidacja", value: "Pipes+DTO" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-red-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Komponenty */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kluczowych komponentów NestJS</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Modules, Controllers, Services, Guards, Interceptors i Pipes — architektura
              NestJS inspirowana Angular, z DI container i dekoratorami TypeScript.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {nestjsComponents.map((c) => (
              <FadeInView key={c.komponent}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900 text-sm">{c.komponent}</h3>
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">{c.scope}</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">{c.rola}</p>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded block text-gray-700">{c.przyklad}</code>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania</h2>
          </FadeInView>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FadeInView key={item.question}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <RelatedArticles currentArticleId="nestjs-co-to-jest-moduly-guardy-mikrouslugi-vs-express-fastify" />
      <ContactSection />
    </Layout>
  );
}
