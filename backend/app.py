from flask import Flask, send_from_directory, render_template
import os
import mimetypes

# Ensure correct MIME types
mimetypes.add_type('application/javascript', '.js')
mimetypes.add_type('text/css', '.css')

app = Flask(__name__, 
            static_folder='dist',  # Changed from 'static' to 'dist'
            static_url_path='',    # This ensures static files are served from root
            template_folder='dist') # Changed from 'templates' to 'dist'

@app.route('/api/data')
def get_data():
    return {"message": "Hello from Flask!"}

# Serve Vite assets
@app.route('/assets/<path:path>')
def serve_assets(path):
    return send_from_directory(os.path.join(app.static_folder, 'assets'), path)

# Serve other static files
@app.route('/<path:path>')
def serve_static(path):
    if os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    return render_template('index.html')

@app.route('/')
def serve_index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)