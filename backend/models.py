from datetime import datetime
from exts import db



class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    cognito_id = db.Column(db.String)
    username = db.Column(db.String(80), unique=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    access_token = db.Column(db.String)
    refresh_token = db.Column(db.String)
    has_paid = db.Column(db.Boolean, default=False)  # New field to track payment status

    def __repr__(self):
        return f"<User {self.username} >"
    
    def save(self):
        db.session.add(self)
        db.session.commit()
    
    def update_access(self, access_token, refresh_token):
        self.access_token = access_token
        self.refresh_token = refresh_token
        db.session.commit()



class Payment(db.Model):
    __tablename__ = 'payments'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    amount = db.Column(db.Float, nullable=False)
    currency = db.Column(db.String(10), nullable=False)
    payment_date = db.Column(db.DateTime, default=datetime.utcnow)

    user = db.relationship('User', backref='payments')

    def __repr__(self):
        return f"<Lesson {self.title} >"
    
