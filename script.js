/**
 * MAATI - AI-Powered Multilingual Precision Agriculture & Smart Irrigation Platform
 * Modern Interactive Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Auto close mobile menu on click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 2. Closed-Loop Irrigation Interactive Actuation Tester
    const simTriggerBtn = document.getElementById('sim-trigger-btn');
    const simVwcStatus = document.getElementById('sim-vwc-status');
    const simPumpState = document.getElementById('sim-pump-state');
    const simStepText = document.getElementById('sim-step-text');

    let isRunning = false;

    if (simTriggerBtn) {
        simTriggerBtn.addEventListener('click', () => {
            if (isRunning) return;
            isRunning = true;
            simTriggerBtn.disabled = true;
            simTriggerBtn.classList.add('opacity-50', 'cursor-not-allowed');

            // Stage 1: Relay Engaged
            simPumpState.innerText = "RELAY ON (PUMP ACTIVE)";
            simPumpState.className = "text-leaf-400 font-bold text-sm mt-0.5";
            simVwcStatus.innerText = "Hydrating Root-Zone...";
            simVwcStatus.className = "text-leaf-300 font-bold text-sm mt-0.5";
            simStepText.innerText = "Actuating 5V optocoupled relay. Delivering metered drip flow...";

            // Stage 2: Hydration completed & verified
            setTimeout(() => {
                simPumpState.innerText = "CUTOFF (VERIFIED)";
                simPumpState.className = "text-cyan-300 font-bold text-sm mt-0.5";
                simVwcStatus.innerText = "Optimal Field Capacity (Verified)";
                simVwcStatus.className = "text-leaf-400 font-bold text-sm mt-0.5";
                simStepText.innerText = "Closed-loop verification complete: Root-zone moisture achieved target baseline.";
            }, 3200);

            // Reset after 6 seconds
            setTimeout(() => {
                isRunning = false;
                simTriggerBtn.disabled = false;
                simTriggerBtn.classList.remove('opacity-50', 'cursor-not-allowed');
            }, 5500);
        });
    }
});
