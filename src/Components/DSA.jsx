import React, { useState } from 'react';

function DSA() {




    return (
        <div className="flex flex-wrap gap-6 justify-center">
            {/* LeetCode Card */}
            <section className="p-6 hover:scale-105 hover:duration-500 w-64 gap-y-3 flex flex-col border rounded-lg border-gray-500">
                <h4 className="text-lg font-bold hover:underline" style={{ color: "#29BABA" }}>
                    <a href="https://leetcode.com/u/SuhailSharieff786/" target="_blank" rel="noopener noreferrer">
                        LeetCode <span>&#8599;</span>
                    </a>
                </h4>
              
            </section>

            {/* CodeChef Card */}
            <section className="p-6 hover:scale-105 hover:duration-500 w-64 gap-y-3 flex flex-col border rounded-lg border-gray-500">
                <h4 className="text-lg font-bold hover:underline" style={{ color: "#FFB700" }}>
                    <a href="https://www.codechef.com/users/SuhailSharieff" target="_blank" rel="noopener noreferrer">
                        CodeChef <span>&#8599;</span>
                    </a>
                </h4>
             
            </section>

            {/* Codeforces Card */}
            <section className="p-6 hover:scale-105 hover:duration-500 w-64 gap-y-3 flex flex-col border rounded-lg border-gray-500">
                <h4 className="text-lg font-bold hover:underline" style={{ color: "#F63737" }}>
                    <a href="https://codeforces.com/profile/suhailsharieff" target="_blank" rel="noopener noreferrer">
                        Codeforces <span>&#8599;</span>
                    </a>
                </h4>
            </section>

            {/* GeeksforGeeks Card */}
            <section className="p-6 hover:scale-105 hover:duration-500 w-64 gap-y-3 flex flex-col border rounded-lg border-gray-500">
                <h4 className="text-lg font-bold hover:underline" style={{ color: "#00A3E0" }}>
                    <a href="https://www.geeksforgeeks.org/user/suhailshariex5lx/" target="_blank" rel="noopener noreferrer">
                        GeeksforGeeks <span>&#8599;</span>
                    </a>
                </h4>
            </section>
        </div>
    );
}

export default DSA;
