public class Juha {
}
public class Juha {
}
public class Query : IRequest<ReturnObject> { }

        public class Handler : IRequestHandler<Query, ReturnObject>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<ReturnObject> Handle(Query request, CancellationToken cancellationToken)
            {
                // handler logic goes here
            }
        }