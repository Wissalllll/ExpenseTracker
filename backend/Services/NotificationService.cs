
using Microsoft.AspNetCore.Mvc;

namespace ExpenseTracker.Services
{
    public class NotificationService
    {
        private readonly List<string> _notifications = new();

        public void AddNotification(string message)
        {
            _notifications.Add(message);
        }

        public List<string> GetNotifications()
        {
            return _notifications.ToList();
        }

        public void ClearNotifications()
        {
            _notifications.Clear();
        }
    }
}

