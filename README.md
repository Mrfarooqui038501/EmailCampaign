# Email Campaign Scheduler

A full-stack application for creating, scheduling, and managing email campaigns with real-time delivery tracking and logging.

## 🚀 Features

- **Campaign Management**: Create new email campaigns with customizable forms
- **Scheduling**: Schedule campaigns for future delivery
- **Delivery Tracking**: Monitor campaign status and email delivery logs
- **Responsive UI**: Clean and responsive interface styled with CSS
- **Real-time Logging**: Track individual email delivery status and errors
- **SMTP Integration**: Support for multiple email providers (Gmail, SendGrid, Mailgun)

## 🛠️ Tech Stack

- **Frontend**: React, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Email Service**: Nodemailer with SMTP support
- **Styling**: CSS

## 📋 Prerequisites

- Node.js (v16 or later)
- MongoDB (local installation or MongoDB Atlas)
- SMTP credentials (Gmail, SendGrid, or other email service)

## 🚀 Installation & Setup

### Backend Setup

1. **Clone the repository and navigate to the backend folder**:
   ```bash
   git clone <repository-url>
   cd email-campaign-scheduler-backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Configuration**:
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   MONGODB_URI=mongodb://localhost:27017/email-campaign-scheduler
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   PORT=5000
   ```

4. **Start MongoDB** (if using local installation) or ensure your MongoDB Atlas connection is ready

5. **Run the server**:
   ```bash
   npm start
   ```

   The backend server will be available at `http://localhost:5000`

### Frontend Setup

1. **Navigate to the frontend folder**:
   ```bash
   cd email-campaign-scheduler-frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Configuration**:
   ```bash
   cp .env.example .env
   ```
   
   Ensure `VITE_API_URL` points to your backend API:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:5173`

## 📊 Database Schema

### Campaign Collection
```javascript
{
  title: String,        // Required - Campaign title
  message: String,      // Required - HTML or plain text email content
  recipients: [String], // Array of email addresses
  scheduledTime: Date,  // Required - When to send the campaign
  status: String,       // 'pending', 'sent', 'failed'
  createdAt: Date      // Auto-generated timestamp
}
```

### EmailLog Collection
```javascript
{
  campaignId: ObjectId, // Reference to Campaign document
  recipient: String,    // Email address of recipient
  status: String,       // 'success', 'failed'
  error: String,        // Optional error message if delivery failed
  sentAt: Date         // Auto-generated timestamp
}
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/campaigns` | Create a new email campaign |
| `GET` | `/api/campaigns` | List all campaigns with email delivery logs |

### Request/Response Examples

#### Create Campaign
```bash
POST /api/campaigns
Content-Type: application/json

{
  "title": "Newsletter - January 2024",
  "message": "<h1>Welcome to our newsletter!</h1><p>Here's what's new...</p>",
  "recipients": ["user1@example.com", "user2@example.com"],
  "scheduledTime": "2024-01-15T10:00:00Z"
}
```

#### Get Campaigns
```bash
GET /api/campaigns

Response:
[
  {
    "_id": "65abc123...",
    "title": "Newsletter - January 2024",
    "status": "sent",
    "recipients": ["user1@example.com", "user2@example.com"],
    "scheduledTime": "2024-01-15T10:00:00Z",
    "emailLogs": [
      {
        "recipient": "user1@example.com",
        "status": "success",
        "sentAt": "2024-01-15T10:00:05Z"
      }
    ]
  }
]
```

## 📧 Email Configuration

### Nodemailer Setup

The application uses Nodemailer for sending emails through SMTP. Supported providers include:

- **Gmail**: Requires App Password if 2FA is enabled
- **SendGrid**: Use API key as password
- **Mailgun**: Configure SMTP credentials
- **Custom SMTP**: Any SMTP-compatible service

### Gmail Configuration Example

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. **Update .env file**:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-digit-app-password
   ```

### SendGrid Configuration Example

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

## 🎯 Usage

1. **Access the Application**: Open `http://localhost:5173` in your browser
2. **Create Campaign**: Fill out the campaign form with title, message, recipients, and schedule time
3. **Monitor Delivery**: View all campaigns and their delivery status in the campaigns list
4. **Check Logs**: Review individual email delivery logs and error messages

## 🔧 Development

### Project Structure
```
email-campaign-scheduler/
├── email-campaign-scheduler-backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
└── email-campaign-scheduler-frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   └── styles/
    └── index.html
```

### Running in Production

#### Backend
```bash
NODE_ENV=production npm start
```

#### Frontend
```bash
npm run build
npm run preview
```

## ⚠️ Known Issues & Troubleshooting

- **SMTP Authentication Errors**: Ensure correct credentials and enable "Less secure app access" or use App Passwords
- **MongoDB Connection Issues**: Verify MongoDB is running and connection string is correct
- **CORS Errors**: Ensure backend CORS is configured to allow frontend origin
- **Scheduled Emails**: Implement a cron job or task scheduler for processing scheduled campaigns

## 🔮 Future Improvements

- [ ] Add email template editor with rich text formatting
- [ ] Implement campaign analytics and open/click tracking
- [ ] Add user authentication and authorization
- [ ] Support for email attachments
- [ ] Campaign A/B testing functionality
- [ ] Integration with popular email marketing services
- [ ] Email list management and segmentation
- [ ] Automated campaign triggers based on user actions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Your Name - armanfarooqui078601@gmail.com

Project Link: [https://github.com/Mrfarooqui038501/EmailCampaign.git](https://github.com/Mrfarooqui038501/EmailCampaign.git)

---

⭐ **Star this repo if you found it helpful!**