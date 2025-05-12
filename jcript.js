// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const modal = document.getElementById('taskModal');
    const startTaskBtns = document.querySelectorAll('.start-task-btn');
    const closeModal = document.querySelector('.close-modal');
    
    // Open modal when "Start Task" button is clicked
    startTaskBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            modal.style.display = 'flex';
        });
    });
    
    // Close modal when the X is clicked
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Handle form submission
    const submitProofBtn = document.querySelector('.submit-proof-btn');
    submitProofBtn.addEventListener('click', function() {
        alert('Proof submitted successfully! Your task will be reviewed soon.');
        modal.style.display = 'none';
    });
    
    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Here you would normally filter the orders
            // For demonstration, we'll just show an alert
            const filter = this.textContent;
            console.log(`Filtering by: ${filter}`);
            
            // In a real application, you would filter the orders here
        });
    });
    
    // Load more button
    const loadMoreBtn = document.querySelector('.load-more-btn');
    loadMoreBtn.addEventListener('click', function() {
        // In a real application, you would load more orders here
        alert('Loading more tasks...');
    });
    
    // Create order button
    const createOrderBtn = document.querySelector('.create-order-btn');
    createOrderBtn.addEventListener('click', function() {
        alert('Redirecting to order creation page...');
    });
    
    // Notification read functionality
    const notificationItems = document.querySelectorAll('.notification-item');
    notificationItems.forEach(item => {
        item.addEventListener('click', function() {
            this.classList.remove('unread');
            
            // Update notification badge count
            const badge = document.querySelector('.notification-icon .badge');
            let count = parseInt(badge.textContent);
            if (count > 0) {
                count--;
                badge.textContent = count;
                if (count === 0) {
                    badge.style.display = 'none';
                }
            }
        });
    });
    
    // Avatar generation (normally this would come from the server)
    const getRandomAvatar = () => {
        const randomSeed = Math.random().toString(36).substring(2, 8);
        return `https://api.dicebear.com/6.x/avataaars/svg?seed=${randomSeed}`;
    };
    
    // Simulate online status for user profile
    const simulateOnlineStatus = () => {
        const userProfile = document.querySelector('.user-profile');
        const statusDot = document.createElement('span');
        statusDot.classList.add('status-dot');
        statusDot.style.width = '10px';
        statusDot.style.height = '10px';
        statusDot.style.backgroundColor = '#34a853';
        statusDot.style.borderRadius = '50%';
        statusDot.style.display = 'inline-block';
        statusDot.style.marginLeft = '5px';
        userProfile.appendChild(statusDot);
    };
    
    simulateOnlineStatus();
    
    // Add animation to statistics
    const animateStats = () => {
        const statCards = document.querySelectorAll('.stat-card');
        statCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.transition = 'all 0.5s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            }, index * 100);
        });
    };
    
    animateStats();
    
    // Helper function to format currency
    const formatCurrency = (amount) => {
        return '$' + parseFloat(amount).toFixed(2);
    };
    
    // Helper function to format dates relative to now
    const formatRelativeTime = (dateString) => {
        const now = new Date();
        const date = new Date(dateString);
        const diffInSeconds = Math.floor((now - date) / 1000);
        
        if (diffInSeconds < 60) {
            return 'just now';
        } else if (diffInSeconds < 3600) {
            const minutes = Math.floor(diffInSeconds / 60);
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else if (diffInSeconds < 86400) {
            const hours = Math.floor(diffInSeconds / 3600);
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else {
            const days = Math.floor(diffInSeconds / 86400);
            return `${days} day${days > 1 ? 's' : ''} ago`;
        }
    };
});
