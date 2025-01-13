from flask import Flask, render_template, request, flash
from flask_mail import Mail, Message
import os

app = Flask(__name__)

# Configuration for Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'your-email@gmail.com'  # Replace with your Gmail address
app.config['MAIL_PASSWORD'] = 'your-app-password'  # Replace with your Gmail app password
app.config['MAIL_DEFAULT_SENDER'] = 'your-email@gmail.com'  # Replace with your Gmail address

mail = Mail(app)

# Secret key for flash messages
app.secret_key = os.urandom(24)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/contact', methods=['POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        
        msg = Message("New Contact Form Submission",
                      recipients=["shubhamk1805@gmail.com"])
        msg.body = f"Name: {name}\nEmail: {email}\nMessage: {message}"
        
        try:
            mail.send(msg)
            flash('Your message has been sent successfully!', 'success')
        except Exception as e:
            flash('An error occurred while sending your message. Please try again later.', 'error')
        
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)

