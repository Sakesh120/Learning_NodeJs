function userForm(req, res) {
  res.write(`
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Student Registration</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      max-width: 600px;
    }

    label {
      display: block;
      margin: 8px 0 4px;
    }

    input,
    select,
    textarea {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
    }

    .row {
      display: flex;
      gap: 8px;
    }

    .row>* {
      flex: 1;
    }

    button {
      padding: 10px 16px;
      margin-top: 12px;
    }
  </style>
</head>

<body>
  <h1>Student Registration</h1>
  <form action="/submit" method="post">
    <label for="fullname">Full Name</label>
    <input id="fullname" name="fullname" type="text" placeholder="John Doe" required>

    <div class="row">
      <div>
        <label for="dob">Date of Birth</label>
        <input id="dob" name="dob" type="date" required>
      </div>
      <div>
        <label for="phone">Phone</label>
        <input id="phone" name="phone" type="tel" placeholder="+91-12345-67890">
      </div>
    </div>

    <label for="email">Email</label>
    <input id="email" name="email" type="email" placeholder="you@example.com" required>

    <label>Gender</label>
    <div class="row" style="margin-top:4px;">
      <label><input type="radio" name="gender" value="male" required> Male</label>
      <label><input type="radio" name="gender" value="female"> Female</label>
      <label><input type="radio" name="gender" value="other"> Other</label>
    </div>

    <label for="course">Course Applied For</label>
    <select id="course" name="course" required>
      <option value="">Select course</option>
      <option value="bsc">B.Sc</option>
      <option value="bcom">B.Com</option>
      <option value="ba">B.A</option>
      <option value="btech">B.Tech</option>
    </select>

    <label for="year">Academic Year</label>
    <input id="year" name="year" type="number" min="1" max="5" value="1">

    <label for="address">Address</label>
    <textarea id="address" name="address" rows="3" placeholder="Permanent address"></textarea>

    <label for="photo">Upload Photo (optional)</label>
    <input id="photo" name="photo" type="file" accept="image/*">

    <div style="display:flex; gap:8px;">
      <button type="reset">Reset</button>
      <button type="submit">Submit Registration</button>
    </div>
  </form>
</body>

</html>
  `);
}
module.exports = userForm;
