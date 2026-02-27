import { Plus, Calendar, Clock, MapPin, Phone, User } from 'lucide-react';

export function DrSchedule() {
  const aiRecommendation = {
    doctor: 'Dr. Sarah Mitchell',
    specialty: 'Cardiology',
    status: 'Pending',
    reason: 'Follow-up for elevated blood pressure readings',
    date: 'Sunday, March 15, 2026',
    time: '10:00 AM',
    location: 'Cardiac Care Center, Suite 302',
    phone: '(555) 123-4567',
  };

  const upcomingAppointment = {
    doctor: 'Dr. James Chen',
    specialty: 'Endocrinology',
    status: 'Scheduled',
    reason: 'HbA1c review and diabetes management',
    date: 'Sunday, March 8, 2026',
    time: '2:30 PM',
    location: 'Metro Medical Building, Floor 5',
    phone: '(555) 987-6543',
  };

  return (
    <div className="p-4 md:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6 md:mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl mb-2">Doctor Schedule</h1>
          <p className="text-gray-600">Manage appointments and view AI recommendations</p>
        </div>
        <button className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors w-full md:w-auto justify-center">
          <Plus className="w-5 h-5" />
          Add Appointment
        </button>
      </div>

      {/* AI Recommended Appointments */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
            <span className="text-orange-600 text-sm">⚡</span>
          </div>
          <h2 className="text-xl font-semibold">AI Recommended Appointments</h2>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border-2 border-orange-200 overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold">{aiRecommendation.doctor}</h3>
                    <span className="px-3 py-1 bg-orange-200 text-orange-700 rounded-full text-xs">
                      {aiRecommendation.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{aiRecommendation.specialty}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                  Schedule
                </button>
                <button className="text-gray-700 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                  Dismiss
                </button>
              </div>
            </div>

            <div className="bg-orange-100 rounded-lg p-4 mb-4">
              <div className="flex items-start gap-2">
                <span className="text-orange-600">⚠️</span>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Recommendation:</span> {aiRecommendation.reason}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">{aiRecommendation.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">{aiRecommendation.time}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">{aiRecommendation.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">{aiRecommendation.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
            <span className="text-emerald-600 text-sm">✓</span>
          </div>
          <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold">{upcomingAppointment.doctor}</h3>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs">
                      {upcomingAppointment.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{upcomingAppointment.specialty}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="text-gray-700 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                  Reschedule
                </button>
                <button className="text-red-600 px-4 py-2 rounded-lg border border-red-300 hover:bg-red-50 transition-colors">
                  Cancel
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Reason:</span> {upcomingAppointment.reason}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">{upcomingAppointment.date}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">{upcomingAppointment.time}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">{upcomingAppointment.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">{upcomingAppointment.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}