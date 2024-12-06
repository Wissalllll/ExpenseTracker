using ExpenseTracker.Services;

public class ExpensesController : Controller
{
    private readonly ApplicationDbContext _context;
    private readonly NotificationService _notificationService;

    public ExpensesController(ApplicationDbContext context, NotificationService notificationService)
    {
        _context = context;
        _notificationService = notificationService;
    }

    public IActionResult Index()
    {
        var notifications = _notificationService.GetNotifications();
        ViewBag.Notifications = notifications;
        _notificationService.ClearNotifications();
        var expenses = _context.Expenses.ToList();
        return View(expenses);
    }

    [HttpPost]
    public IActionResult Create(Expense expense)
    {
        if (ModelState.IsValid)
        {
            _context.Expenses.Add(expense);
            _context.SaveChanges();
            _notificationService.AddNotification("Expense successfully created!");
            return RedirectToAction(nameof(Index));
        }
        return View(expense);
    }
}
