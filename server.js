require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const nodemailer = require('nodemailer');

const app = express();
const dbFile = path.join(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbFile);

const ORG_EMAIL = process.env.ORG_EMAIL || 'trgd2021@gmail.com';

function createMailer() {
  if (process.env.SMTP_SERVICE && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      service: process.env.SMTP_SERVICE,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }

  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
  }

  return null;
}

const mailer = createMailer();

async function sendContactEmail({ name, email, region, message }) {
  if (!mailer) {
    console.warn('Email transporter not configured; skipping email send.');
    return;
  }

  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER || 'no-reply@trgd.org',
    to: ORG_EMAIL,
    subject: `New TROPICAL RESOURCE GOVERNANCE FOR DEVELOPMENT contact message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nRegion: ${region}\n\nMessage:\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Region:</strong> ${region}</p><p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>`
  };

  return mailer.sendMail(mailOptions);
}

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

function initDatabase() {
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS subscribers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        region TEXT NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      );
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS contact_messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        region TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      );
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS news_posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        category TEXT NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      );
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS team_members (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        role TEXT NOT NULL,
        category TEXT NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      );
    `);

    db.run(`
      CREATE TABLE IF NOT EXISTS program_content (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        summary TEXT NOT NULL,
        points TEXT NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP
      );
    `);

    db.get('SELECT COUNT(*) AS count FROM news_posts', (err, row) => {
      if (!err && row.count === 0) {
        const insert = db.prepare('INSERT INTO news_posts (title, description, category) VALUES (?, ?, ?)');
        insert.run('Community-led Wetland Restoration Begins in Madi', 'TRGD partners with local leaders to revive wetlands and protect water sources.', 'blog');
        insert.run('Training 200 Farmers in Climate-smart Agriculture', 'Farmers from West Nile learn resilient cropping practices and land stewardship skills.', 'blog');
        insert.run('New Land Rights Report Published', 'A fresh report details progress on tenure security and community advocacy in Northern Uganda.', 'blog');
        insert.run('Publications & Annual Reports', 'A library of TRGD research and evidence summaries for partners and policy actors.', 'feature');
        insert.run('Land Rights Advocacy Toolkit', 'Practical guidance for community defenders and local governance committees.', 'feature');
        insert.run('Climate Justice Brief', 'Insights into equitable adaptation and accountability approaches in the region.', 'feature');
        insert.finalize();
      }
    });

      if (!err && row.count === 0) {
        const insert = db.prepare('INSERT INTO team_members (name, role, category) VALUES (?, ?, ?)');
        insert.run('Dr. Joyce Moriku Kaducu', 'Board Chair', 'Board of Directors');
        insert.run('Esther Toloa', 'Director of Programs', 'Board of Directors');
        insert.run('Richard Vonze Chancellor', 'Executive Director', 'Board of Directors');
        insert.finalize();
      }

    db.get('SELECT COUNT(*) AS count FROM program_content', (err, row) => {
      if (!err && row.count === 0) {
        const insert = db.prepare('INSERT INTO program_content (title, summary, points) VALUES (?, ?, ?)');
        insert.run(
          'Environment & Conservation',
          'TRGD supports local stewards to restore wetlands, protect forests, and manage resources sustainably.',
          JSON.stringify([
            'Community-led forest and wetland restoration efforts.',
            'Training on sustainable harvesting and biodiversity monitoring.',
            'Support for local natural resource governance structures.'
          ])
        );
        insert.run(
          'Land Rights',
          'We defend customary land access through legal support, documentation and community mediation.',
          JSON.stringify([
            'Supporting secure land tenure for women and vulnerable households.',
            'Facilitating rights education and dispute resolution.',
            'Engaging local authorities to formalise community land agreements.'
          ])
        );
        insert.run(
          'Climate Justice',
          'TRGD amplifies community voices in climate policy and helps households adapt to changing weather.',
          JSON.stringify([
            'Training farmers on climate-smart agriculture.',
            'Elevating local experiences in advocacy spaces.',
            'Promoting equitable access to climate adaptation funding.'
          ])
        );
        insert.finalize();
      }
    });
  });
}

initDatabase();

app.post('/api/subscribers', (req, res) => {
  const { name, email, region } = req.body;
  if (!name || !email || !region) {
    return res.status(400).json({ error: 'Missing required subscriber fields.' });
  }

  db.run(
    'INSERT OR IGNORE INTO subscribers (name, email, region) VALUES (?, ?, ?)',
    [name, email, region],
    function (err) {
      if (err) {
        return res.status(500).json({ error: 'Unable to save subscriber.' });
      }
      res.json({ id: this.lastID, name, email, region });
    }
  );
});

app.post('/api/contacts', (req, res) => {
  const { name, email, region, message } = req.body;
  if (!name || !email || !region || !message) {
    return res.status(400).json({ error: 'Missing required contact fields.' });
  }

  db.serialize(() => {
    db.run(
      'INSERT INTO contact_messages (name, email, region, message) VALUES (?, ?, ?, ?)',
      [name, email, region, message],
      err => {
        if (err) {
          return res.status(500).json({ error: 'Unable to save contact message.' });
        }

        db.run(
          'INSERT OR IGNORE INTO subscribers (name, email, region) VALUES (?, ?, ?)',
          [name, email, region],
          async function (err) {
            if (err) {
              return res.status(500).json({ error: 'Unable to save subscriber.' });
            }

            try {
              await sendContactEmail({ name, email, region, message });
              res.json({ status: 'ok', emailSent: !!mailer, name, email, region, message });
            } catch (emailError) {
              console.error('Email send failed:', emailError);
              res.json({ status: 'ok', emailSent: false, warning: 'Email could not be sent. Please check SMTP settings.', name, email, region, message });
            }
          }
        );
      }
    );
  });
});

app.get('/api/news', (req, res) => {
  db.all('SELECT id, title, description FROM news_posts WHERE category = ? ORDER BY created_at DESC', ['blog'], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to load news items.' });
    }
    res.json(rows);
  });
});

app.get('/api/features', (req, res) => {
  db.all('SELECT id, title, description FROM news_posts WHERE category = ? ORDER BY created_at DESC', ['feature'], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to load features.' });
    }
    res.json(rows);
  });
});

app.get('/api/team', (req, res) => {
  db.all('SELECT id, name, role, category FROM team_members ORDER BY created_at ASC', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to load team members.' });
    }
    res.json(rows);
  });
});

app.get('/api/programs', (req, res) => {
  db.all('SELECT id, title, summary, points FROM program_content ORDER BY created_at ASC', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to load programs.' });
    }
    const programs = rows.map(row => ({
      id: row.id,
      title: row.title,
      summary: row.summary,
      points: JSON.parse(row.points)
    }));
    res.json(programs);
  });
});

// Social media links configuration endpoint
app.get('/api/social', (req, res) => {
  res.json({
    tiktok: {
      handle: '@trgd760',
      url: 'https://tiktok.com/@trgd760',
      active: true,
      description: 'Official TRGD TikTok account'
    },
    facebook: {
      url: '#',
      active: false
    },
    instagram: {
      url: '#',
      active: false
    },
    x: {
      url: '#',
      active: false
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
