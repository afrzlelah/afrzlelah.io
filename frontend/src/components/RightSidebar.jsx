const RightSidebar = () => {
  return (
    <div className="w-1/5 bg-white p-6">
      <div className="flex flex-col items-center mb-6">
        <img
          src="https://placehold.co/80x80"
          alt="Profile"
          className="w-20 h-20 rounded-full mb-4"
        />
        <h2 className="text-lg font-semibold">afrzlelah</h2>
        <span className="text-gray-500">Student</span>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
          Profile
        </button>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">December 2022</h3>
        <div className="grid grid-cols-7 gap-2 text-center text-gray-500">
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
          <div>Sun</div>
          <div className="text-gray-300">28</div>
          <div className="text-gray-300">29</div>
          <div className="text-gray-300">30</div>
          <div className="text-gray-300">1</div>
          <div className="text-gray-300">2</div>
          <div className="text-gray-300">3</div>
          <div className="text-gray-300">4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
          <div>17</div>
          <div>18</div>
          <div>19</div>
          <div>20</div>
          <div>21</div>
          <div className="bg-blue-500 text-white rounded-full">22</div>
          <div>23</div>
          <div>24</div>
          <div>25</div>
          <div>26</div>
          <div>27</div>
          <div>28</div>
          <div>29</div>
          <div>30</div>
          <div>31</div>
          <div className="text-gray-300">1</div>
          <div className="text-gray-300">2</div>
          <div className="text-gray-300">3</div>
          <div className="text-gray-300">4</div>
          <div className="text-gray-300">5</div>
          <div className="text-gray-300">6</div>
          <div className="text-gray-300">7</div>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Reminders</h3>
        <ul>
          <li className="mb-4">
            <p className="text-gray-600">Eng - Vocabulary test</p>
            <p className="text-gray-500 text-sm">12 Dec 2022, Friday</p>
          </li>
          <li className="mb-4">
            <p className="text-gray-600">Eng - Essay</p>
            <p className="text-gray-500 text-sm">12 Dec 2022, Friday</p>
          </li>
          <li className="mb-4">
            <p className="text-gray-600">Eng - Speaking Class</p>
            <p className="text-gray-500 text-sm">13 Dec 2022, Friday</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
