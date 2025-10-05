/* PrismJS Placeholder - Lightweight Syntax Highlighting */

// Simple syntax highlighting for code blocks
document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('code');
    
    codeBlocks.forEach(block => {
        if (block.parentElement.tagName !== 'PRE') return;
        
        let content = block.innerHTML;
        
        // Simple JSON highlighting
        if (content.includes('{') && content.includes('}')) {
            content = content
                .replace(/(".*?")\s*:/g, '<span style="color: #7ec699;">$1</span>:')
                .replace(/:\s*(".*?")/g, ': <span style="color: #f8c555;">$1</span>')
                .replace(/:\s*(\d+)/g, ': <span style="color: #f08d49;">$1</span>')
                .replace(/:\s*(true|false|null)/g, ': <span style="color: #cc99cd;">$1</span>');
        }
        
        // Simple SQL highlighting
        if (content.toUpperCase().includes('SELECT') || content.toUpperCase().includes('FROM')) {
            content = content
                .replace(/\b(SELECT|FROM|WHERE|GROUP BY|ORDER BY|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP)\b/gi, 
                    '<span style="color: #cc99cd; font-weight: bold;">$1</span>')
                .replace(/\b(AND|OR|NOT|NULL|TRUE|FALSE)\b/gi, 
                    '<span style="color: #f08d49;">$1</span>')
                .replace(/'([^']*)'/g, '<span style="color: #7ec699;">\'$1\'</span>');
        }
        
        // Simple shell command highlighting
        if (content.includes('curl') || content.includes('export') || content.includes('mvn')) {
            content = content
                .replace(/\b(curl|export|mvn|java|mysql|brew|sudo|apt|yum)\b/g, 
                    '<span style="color: #cc99cd; font-weight: bold;">$1</span>')
                .replace(/(-\w+|--\w+)/g, '<span style="color: #f08d49;">$1</span>')
                .replace(/(https?:\/\/[^\s]+)/g, '<span style="color: #67cdcc;">$1</span>');
        }
        
        block.innerHTML = content;
    });
});
